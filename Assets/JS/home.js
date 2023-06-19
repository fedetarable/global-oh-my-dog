import {
  getData,
  filtrarPorBusqueda,
  displayProducts,
} from "./module/function.js";

async function main() {
  const data = await getData();
  console.log(data);

  const searchBar = document.querySelector(".searchBar");
  const productContainer = document.querySelector(".productContainer");

  searchBar.addEventListener("keyup", (e) => {
    const arrayYaBuscado = filtrarPorBusqueda(data, searchBar);
    displayProducts(arrayYaBuscado, productContainer);
  });

  displayProducts(data, productContainer);
}

main();
