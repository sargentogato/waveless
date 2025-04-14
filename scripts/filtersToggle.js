/* Arrow to dispaly filter options */
const toggleButtons = document.querySelectorAll(".jsToggle");

toggleButtons.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    const section = toggleBtn.closest(".filters__section");
    const content = section.querySelector(".jsContent");
    const arrow = toggleBtn.querySelector(".jsArrow");
    const icon = toggleBtn.querySelector(".jsIcon");
    const filterTitle = toggleBtn.querySelector(".jsTitleFilter");

    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !expanded);
    content.hidden = expanded;
    arrow.classList.toggle("filters__arrow--rotated");

    icon.classList.toggle("filter__icon-svg--notSelected");
    icon.classList.toggle("filters__icon-svg--selected");
    filterTitle.classList.toggle("filters__label--selected");
  });
});


/* Button to open filters */
const btnFilter = document.getElementById("filters");
const filterPannel = document.getElementById("filtersPannel");
const closeFilterBox = document.getElementById("closeFilterBox");

btnFilters.addEventListener("click", () => {
  console.log("BOTON DE FILTROS");
  
  filterPannel.classList.toggle("filters--visible");
  filterPannel.classList.toggle("filters");
})

closeFilterBox.addEventListener("click", () => {
  console.log("Dentro");
  
  filterPannel.classList.toggle("filters--visible");
  filterPannel.classList.toggle("filters");
});


/* Recize Windows */
const windowsSize = window.matchMedia("(min-width: 1128px)");

function handleResize(eventTriggered) {
  if (eventTriggered.matches) {
    filterPannel.classList.remove("filters--visible");
    filterPannel.classList.add("filters");
  } else {
    filterPannel.classList.add("filters")
  }
}

// Listen changes
windowsSize.addEventListener("change", handleResize);

// Execute on load too
handleResize(windowsSize);
