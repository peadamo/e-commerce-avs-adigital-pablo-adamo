import { products } from "../components/data/products";

export const productsDetailAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Message Error from Reject");
    resolve(products);
  }, 2500);
});