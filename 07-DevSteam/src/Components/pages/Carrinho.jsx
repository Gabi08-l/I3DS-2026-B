const Carrinho = ({
    carrinho,
    onRemoveCarrinho
}) => {

    const total = carrinho.reduce(
        (acc, item) => acc + item.preco,
        0
    );

    return (

        <div className="container my-5">

            <h1 className="text-white mb-4">
                Carrinho
            </h1>

            {carrinho.length === 0 ? (

                <p className="text-white">
                    Seu carrinho está vazio.
                </p>

            ) : (

                carrinho.map((item) => (

                    <div
                        key={item.id}

                        className="bg-dark p-3 rounded mb-3 d-flex justify-content-between align-items-center"
                    >

                        <div>

                            <h4 className="text-white">
                                {item.nome}
                            </h4>

                            <p className="text-success">
                                R${item.preco.toFixed(2)}
                            </p>

                        </div>

                        <button
                            className="btn btn-danger"

                            onClick={() =>
                                onRemoveCarrinho(item.id)
                            }
                        >
                            Remover
                        </button>

                    </div>

                ))

            )}

            <h2 className="text-white mt-4">
                Total: R$
                {total.toFixed(2)}
            </h2>

        </div>

    );
};

export default Carrinho;