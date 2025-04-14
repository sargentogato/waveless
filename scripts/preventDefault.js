const cardsFinalPrice = document.querySelectorAll(".cards__card-details");

for(let card of cardsFinalPrice) {
  card.addEventListener("click", (eventTriggered) => {
    eventTriggered.preventDefault()
  })
}

