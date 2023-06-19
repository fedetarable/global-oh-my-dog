import { getData } from "./module/function.js";

async function main() {
  const data = await getData();
  // const events = data.events;

  const params = new URLSearchParams(window.location.search);
  const contenedorDetail = document.getElementById("contenedorDetail");

  const eid = params.get("id");

  const idEncontrado = data.find((event) => event._id == eid);

  contenedorDetail.innerHTML = `
<div class="cardDetailImg d-flex flex-sm-column justify-content-center">
        <img class="imgDetail" src="${idEncontrado.imagen}" alt="${idEncontrado.producto}" />
</div>
<section class="sectionDetail d-flex flex-column justify-content-center align-items-center bg-light p-3">
        <h3>${idEncontrado.producto}</h3>
        <p>${idEncontrado.descripcion}</p>
        <div class="d-flex justify-content-between w-100">
            <p>category:${idEncontrado.categoria}</p>
         

        
        <a class="btn btn-primary" href="#" role="button">Comprar</a>
    </section>`;
}

main();
