const apiUrl = "https://mindhub-xj03.onrender.com/api/petshop";
const data = [];

async function getData() {
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Ocurrió un error al obtener los datos:", error);
  }
}

function productosFarmacia(prod) {
  return prod.filter((prod) => {
    return prod.categoria === "farmacia";
  });
}

function productosJuguetes(prod) {
  return prod.filter((prod) => {
    return prod.categoria === "jugueteria";
  });
}

export function filtrarPorBusqueda(events, searchBar) {
  const searchString = searchBar.value.toLowerCase();
  return events.filter((event) => {
    return event.producto.toLowerCase().includes(searchString);
  });
}

export const displayProducts = (products, prodContainer, pastOrUpcoming) => {
  if (products.length > 0) {
    const htmlString = products
      .map((prod) => {
        return `
          <div class="card mx-3 mt-3" style="width: 18rem;">
              <img src="${
                prod.imagen
              }" class="cardImgStandard card-img-top" alt="...">
              <div class="card-body d-flex flex-column align-items-center">
                  <h5 class="card-title">${prod.producto}</h5>
                  <p class="card-text">${prod.descripcion}</p>
                  <div class="d-flex justify-content-between align-items-baseline w-100">
                      <p>$${prod.precio}</p>
                    ${
                      pastOrUpcoming
                        ? `<a href="./detail.html?id=${prod._id}" class="btn btn-danger">Details</a>`
                        : `<a href="./Assets/detail.html?id=${prod._id}" class="btn btn-danger">Details</a>`
                    }
                  </div>
              </div>
          </div>
          `;
      })
      .join("");
    prodContainer.innerHTML = htmlString;
  } else {
    prodContainer.innerHTML = `<h3 class="text-center my-4">No products found, try with another one.</h3>`;
  }
};

export { getData, productosFarmacia, productosJuguetes };
