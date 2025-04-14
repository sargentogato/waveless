const elements = document.querySelectorAll(".cards__card-link");
let currentElement = null;

elements.forEach((element) => {
  element.addEventListener("click", (selectedElement) => {
    const clickedElemet = selectedElement;
    displayInfoSample(clickedElemet);
  });
});

function displayInfoSample(clickedElemet) {
  if (currentElement) {
    deleteElement();
  }

  const item = document.getElementById(`${clickedElemet.target.id}`);

  currentElement = item;

  const boxData = document.createElement("div");
  boxData.classList.add("price-breakdown");
  boxData.setAttribute("onclick", "event.stopPropagation()");

  const data = `
  <div class="price-breakdown__header">
    <h2 class="price-breakdown__title">Desglose de precios</h2>
    <button id="closeBreakdownPrice" class="price-breakdown__close">&times;</button>
  </div>

  <div class="price-breakdown-money">
      <div class="price-breakdown__destination">
        <span class="price-breakdown__place">Marruecos, África</span>
        <span class="price-breakdown__days">9 días</span>
      </div>
      
      <div class="price-breakdown__item">
        <span class="price-breakdown__label">Precio antes de impuestos</span>
        <span class="price-breakdown__value">1.124,00 €</span>
      </div>
      <div class="price-breakdown__item">
        <span class="price-breakdown__label">Impuesto</span>
        <span class="price-breakdown__value">4,43 €</span>
      </div>
      <div class="price-breakdown__item">
        <span class="price-breakdown__label">Lorem ipsum</span>
        <span class="price-breakdown__value">150,42 €</span>
      </div>
  </div>

  <div class="price-breakdown__total">
    <span class="price-breakdown__label-total">Precio final</span>
    <span class="price-breakdown__final-price">2.455,00 €</span>
  </div>
  `;
  boxData.insertAdjacentHTML("beforeend", data);
  item.appendChild(boxData);

  /* closeBreakdownPrice x para cerrar modal */

  document
    .getElementById("closeBreakdownPrice")
    .addEventListener("click", (e) => {
      e.preventDefault();
      deleteElement();
    });
}

/* 
  Delete cards when it is triguer opening another card or clicking on the close button
*/
function deleteElement() {
  currentElement.removeChild(currentElement.firstElementChild);
  currentElement = null;
}
