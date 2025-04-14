const toggleBtn = document.getElementById("jsToggle")

toggleBtn.addEventListener('click', () => {
 const content = document.getElementById("jsContent");
 const arrow = document.getElementById("jsArrow");
 const expanded = toggleBtn.getAttribute("aria-expanded") === 'true';
 console.log("🚀 ~ toggleBtn.addEventListener ~ expanded:", expanded);
 const icon = document.getElementById("jsIcon");
 const filterTitle = document.getElementById("jsTitleFilter");
  console.log("🚀 ~ toggleBtn.addEventListener ~ filterTitle:", filterTitle);
  
  
 toggleBtn.setAttribute("aria-expanded", !expanded);
 content.hidden = expanded;
 arrow.classList.toggle("filters__arrow--rotated");
 
 if (icon.classList.contains("filter__icon-svg--notSelected")) {
   icon.classList.remove("filter__icon-svg--notSelected");
   icon.classList.add("filters__icon-svg--selected");
 } else {
   icon.classList.remove(".filters__icon-svg--selected");
   icon.classList.add("filter__icon-svg--notSelected");
 }
 
 filterTitle.classList.toggle("filters__label--selected");
 
})

/* Button to open filters */
const btnFilter = document.getElementById("filters");
const filterPannel = document.getElementById("filtersPannel");

btnFilters.addEventListener("click", () => {
  filterPannel.classList.toggle("filters--visible");
  filterPannel.classList.toggle("filters");
})


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
