

export const showProductsAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
  console.log("soy una promesa de 5 seg")
    resolve();
  }, 2000);
});