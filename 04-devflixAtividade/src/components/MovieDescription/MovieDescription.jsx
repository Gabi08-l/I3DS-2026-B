import { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";
const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState([]);

  // helper to translate arbitrary text using the same server proxy
  async function translateText(text) {
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          source: "en",
          target: "pt",
          format: "text",
        }),
      });
      const json = await response.json();
      return json.translatedText;
    } catch (err) {
      console.error("translation failed", err);
      return text; // fall back to original
    }
  }

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`${props.apiUrl}&i=${props.movieID}`);
        const data = await response.json();
        // translate the plot (and title) before setting state
        if (data) {
          const updated = { ...data };
          if (data.Plot) {
            updated.Plot = await translateText(data.Plot);
          }
          if (data.Title) {
            updated.Title = await translateText(data.Title);
          }
          setMovieDesc(updated);
        } else {
          setMovieDesc(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    load();
  }, [props.apiUrl, props.movieID]);
  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt="" />

          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>

          <div className={styles.movieType}>
            <div>
              <img src="/favicon.png" alt="" />
              {movieDesc.Type}
              <h1>{movieDesc.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(movieDesc.Title)}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {movieDesc.imdbRating} | Duração: {movieDesc.Runtime} |{" "}
            {movieDesc.Released}
          </div>
          <div className={styles.containerFlex}>
            <p>Elenco: {movieDesc.Actors}</p>
            <p>Gênero: {movieDesc.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {movieDesc.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
