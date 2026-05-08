/**
 * Formata um número para o padrão de moeda Brasileira (R$)
 * @param {number} valor - O valor numérico a ser formatado
 * @returns {string} - O valor formatado (ex: R$ 99,90)
 */
export const formatarMoeda = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
};

/**
 * Calcula o preço final com desconto
 * @param {number} preco - Preço original
 * @param {number} desconto - Porc de desconto (ex: 20)
 * @returns {number}
 */
export const calcularPrecoComDesconto = (preco, desconto) => {
  return preco - (preco * desconto) / 100;
};