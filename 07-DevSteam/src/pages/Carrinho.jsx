import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatarMoeda, calcularPrecoComDesconto } from '../utils/formatters'

const Carrinho = ({ carrinhoItem, onRemoveCarrinho, onUpdateCarrinho }) => {
  const navigate = useNavigate();

  const total = carrinhoItem.reduce(
    (acc, item) => acc + calcularPrecoComDesconto(item.preco, item.desconto) * item.quantidade,
    0
  );

  return (
    <div className="container my-5" style={{ minHeight: "70vh", color: "white" }}>
      <h2 className="text-uppercase mb-4 border-bottom pb-2">Meu Carrinho</h2>

      {carrinhoItem.length === 0 ? (
        <div className="text-center py-5 bg-dark rounded shadow">
          <p className="fs-4 opacity-50">Seu carrinho está vazio.</p>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
            VOLTAR PARA A LOJA
          </button>
        </div>
      ) : (
        <div className="row">
          {/* LISTA DE JOGOS */}
          <div className="col-lg-8">
            <div className="bg-dark p-3 rounded shadow">
              {carrinhoItem.map((item) => (
                <div key={item.id} className="d-flex align-items-center gap-3 p-3 mb-3" style={{ background: "#2a475e", borderRadius: "8px" }}>
                  <img src={item.imagem} alt={item.titulo} width={80} height={110} className="object-fit-cover rounded" />
                  
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.titulo}</h5>
                    <p className="text-success fw-bold mb-2">{formatarMoeda(calcularPrecoComDesconto(item.preco, item.desconto))}</p>
                    
                    <div className="d-flex align-items-center gap-3">
                      <div className="btn-group border border-secondary rounded">
                        <button className="btn btn-sm btn-outline-light border-0" onClick={() => onUpdateCarrinho(item, item.quantidade - 1)}>-</button>
                        <span className="px-3 align-self-center">{item.quantidade}</span>
                        <button className="btn btn-sm btn-outline-light border-0" onClick={() => onUpdateCarrinho(item, item.quantidade + 1)}>+</button>
                      </div>
                      <button className="btn btn-sm btn-link text-danger text-decoration-none" onClick={() => onRemoveCarrinho(item)}>
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RESUMO DA COMPRA (PROMOÇÃO + TOTAL) */}
          <div className="col-lg-4">
            <div className="bg-dark p-4 rounded shadow border border-success">
              <h4 className="mb-4">Resumo do Pedido</h4>
              <div className="d-flex justify-content-between mb-2 opacity-75">
                <span>Itens:</span>
                <span>{carrinhoItem.length}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4 fs-4 fw-bold">
                <span>Total:</span>
                <span className="text-success">{formatarMoeda(total)}</span>
              </div>
              <button className="btn btn-success w-100 py-3 fw-bold text-uppercase" onClick={() => navigate("/checkout")}>
                Finalizar Compra
              </button>
              <button className="btn btn-link w-100 text-white mt-2 small opacity-50" onClick={() => navigate("/")}>
                Continuar Comprando
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho
