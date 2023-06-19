import {
  getData,
  filtrarPorBusqueda,
  productosJuguetes,
  displayProducts,
} from "./module/function.js";

async function main() {
  const data = await getData();

  let prodJuguetes = productosJuguetes(data);

  const searchBar = document.querySelector(".searchBar");

  searchBar.addEventListener("keyup", (e) => {
    const arrayYaBuscado = filtrarPorBusqueda(prodJuguetes, searchBar);

    displayProducts(arrayYaBuscado, juguetesProdContainer, true);
  });

  const juguetesProdContainer = document.querySelector(
    ".juguetesProdContainer"
  );

  displayProducts(prodJuguetes, juguetesProdContainer, true);
}

main();
