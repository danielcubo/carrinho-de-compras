import createItem from "./services/item.mjs";
import * as cartService from "./services/cart.mjs";

const items = [];
const cartItems = [];
const whishList = [];

console.log("Carrinho de Compras");
// items[0] = await createItem("Camiseta", 29.99, 2);
// console.log("Item 1: ", items[0]);
// console.log("Item 1 Subtotal: ", items[0].subTotal());
// items[1] = await createItem("Calça Jeans", 59.99, 1);
// console.log("Item 2: ", items[1]);
// console.log("Item 2 Subtotal: ", items[1].subTotal());
// items[2] = await createItem("Tênis", 89.99, 1);
// console.log("Item 3: ", items[2]);
// console.log("Item 3 Subtotal: ", items[2].subTotal());

await createItem("Camiseta", 29.99, 2, items);
await createItem("Calça Jeans", 59.99, 1, items);
await createItem("Tênis", 89.99, 1, items);

// Adicionando itens ao carrinho
await cartService.addItemToCart(cartItems, items[0]);
await cartService.addItemToCart(cartItems, items[1]);
await cartService.addItemToCart(cartItems, items[2]);

await cartService.displayCart(cartItems);

console.log(await cartService.calculateTotal(cartItems)); // 0

await cartService.removeItemFromCart(cartItems, items[1]);

await cartService.displayCart(cartItems);

console.log(await cartService.calculateTotal(cartItems)); // 0

