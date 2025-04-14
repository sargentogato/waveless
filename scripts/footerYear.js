document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector(".footer__year");
  const currentYear = new Date().getFullYear();
  year.textContent = currentYear;
});
