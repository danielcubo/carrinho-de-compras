async function createItem(description, price, quantity, items) {
  items.push({ description, price, quantity });
  return {
    description,
    price,
    quantity,
    subTotal: () => price * quantity,
  };
}

export default createItem;