import styles from "./GameCard.module.css"

const GameCard = ({image, porcentagem, precoOriginal, precoDesc}) => {
  return (
    <div className={styles.game_box}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>

      <div className={styles.desc_container}>
        <h3 className={styles.text_exclu}>OFERTA ESPECIAL</h3>

        <div className={styles.sec_preco}>
            <div className={styles.porc_preco}>{porcentagem}</div>
        </div>
        <div className={styles.box_preco}>
            <div className={styles.old_preco}>{precoOriginal}</div>
            <div className={styles.new_preco}>{precoDesc}</div>

        </div>
      </div>
    </div>
  )
}

export default GameCard
