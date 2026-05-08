import styles from "./GameCard.module.css"

const GameCard = ({imagem, porcentagem, precoOriginal, precoDesconto, nome}) => {
    return (
        <div className={styles.cards}>
            <img src={imagem} alt={nome} />

            <div className={styles.info}>
                <h3>{nome}</h3>
                </div>
                <div className={styles.preco_area}>

    <div className={styles.desconto}>
        <span>{porcentagem}</span>
    </div>

    <div className={styles.precos}>
        <small>R${precoOriginal}</small>
        <h2>R${precoDesconto}</h2>
    </div>

</div>

                <button className={styles.add_botao}>Adicionar ao carrinho</button>
        </div>
        
    )
}
export default GameCard
