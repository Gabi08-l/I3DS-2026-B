import styles from "./GameCard.module.css"

const GameCard = ({image, porcentagem, precoOriginal, precoDesc}) => {
  return (
    <div className={styles.game_box}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>

      <div className={styles.desc_container}>
        <h3 className={styles.text_exclu}>OFERTA ESPECIAL</h3>
      </div>
    </div>
  )
}

export default GameCard
