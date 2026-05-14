import React from "react"
import styles from "./GameCard.module.css"

const GameCard = ({id,imagem, porcentagem, precoOriginal, desconto, nome, onAdd }) => {

 const precoFinal = precoOriginal - (precoOriginal * desconto) / 100;



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
        <h2>R${precoFinal}</h2>
    </div>

</div>

                <button className={styles.add_botao} onClick={() => onAdd({id, nome, imagem, preco: precoFinal})}>Adicionar ao carrinho</button>
        </div>
        
    )
}
export default GameCard
