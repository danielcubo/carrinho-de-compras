## Objetivo
  Criar um carrinho de compras baseado no Site da Shopee, onde o carrinho armazene itens e faça o cálculo de items automaticamente.

// Domínio da aplicação: carrinho de compras
  - Entidades
    * Cart
    * Item


E o seguinte?

async function createItem(description, price, quantity, items) {
  return {
    description,
    price,
    quantity,
    insertItems: () => { items.push({ description, price, quantity }); },
    subTotal: () => price * quantity,
  };
}

await createItem("Camiseta", 29.99, 2, items);

O que tem de errado no seguinte código javascript?

const carItems = [
  { description: "Camiseta", price: 29.99, quantity: 2 },
  { description: "Calça Jeans", price: 59.99, quantity: 1 },
  { description: "Tênis", price: 89.99, quantity: 1 },
];

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.subTotal(), 0);

}

console.log(calculateTotal(cartItems));