import {
  getData,
  productosFarmacia,
  filtrarPorBusqueda,
  displayProducts,
} from "./module/function.js";

async function main() {
  const data = await getData();
  let prodFarmacia = productosFarmacia(data);
  console.log(prodFarmacia);

  const searchBar = document.querySelector(".searchBar");

  searchBar.addEventListener("keyup", (e) => {
    const arrayYaBuscado = filtrarPorBusqueda(prodFarmacia, searchBar);

    displayProducts(arrayYaBuscado, prodFarmaciaContainer, true);
  });

  const prodFarmaciaContainer = document.querySelector(
    ".prodFarmaciaContainer"
  );

  displayProducts(prodFarmacia, prodFarmaciaContainer, true);
}

main();
