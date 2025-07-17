async function addItemToCart(cart, item) {
  // Adiciona o item ao carrinho
  cart.push(item);
}

async function removeItemFromCart(cart, item) {
  // Remove o item do carrinho
  // cart.splice(cart.indexOf(item), 1);
  const index = cart.indexOf(item);
  if (index > -1) {
    cart.splice(index, 1);
  }
}

async function displayCart(cart) {
  // Exibe os itens do carrinho
  console.log("Itens no carrinho:");
  for (const item of cart) {
    console.log(`- ${item.description}: R$ ${item.price.toFixed(2)} (Quantidade: ${item.quantity})`);
  }
}

async function calculateTotal(cart) {
  let result = 0;
  for (const item of cart) {
    result += item.price * item.quantity;
  }
  return result.toFixed(2);

  // A lógica abaixo não serve para o meu modelo de negócio
  // return cart.reduce((total, item) => total + item.subTotal(), 0);
}

export { addItemToCart, removeItemFromCart, calculateTotal, displayCart };