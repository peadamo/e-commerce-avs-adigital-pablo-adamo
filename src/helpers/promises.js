import { products } from "../../src/components/data/products";

export const productsAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Message Error from Reject");
    resolve(products);
  }, 2000);
});