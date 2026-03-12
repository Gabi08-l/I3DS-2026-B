import { useState } from "react";
import styles from "./MovieCard.module.css";
import MovieDescription from "../MovieDescription/MovieDescription";

const MovieCard = (props) => {
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!IsModalOpen);
  };

  return (
    <>
      <div className={styles.movie} onClick={toggleModal}>
        <div>
          <p>
            {props.Year} {IsModalOpen}
          </p>
        </div>
        <div>
          <img src={props.Poster} alt={props.Title} />
        </div>
        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
      </div>
      {IsModalOpen && (
        <MovieDescription
          apiUrl={props.apiUrl}  //para n precisar escrever todos as variaveis, só ligar elas sim ao props
          movieID={props.imdbID}
          click={toggleModal}
        />
      )}
    </>
  );
};

export default MovieCard;
