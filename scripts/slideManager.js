class Slider {
  constructor() {
    this.slides = document.querySelectorAll(".slide");
    this.dots = document.querySelectorAll(".dot");
    this.current = 0;
    this.init();
  }

  init() {
    // Eventos de teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prev();
      if (e.key === "ArrowRight") this.next();
    });

    // Eventos de ratón/táctiles
    document
      .querySelector(".prev")
      .addEventListener("click", () => this.prev());
    document
      .querySelector(".next")
      .addEventListener("click", () => this.next());

    // Paginación
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goTo(index));
    });

    // Autoplay (opcional)
    this.autoplay = setInterval(() => this.next(), 5000);
  }

  updateAria() {
    this.slides.forEach((slide, index) => {
      const isCurrent = index === this.current;
      slide.setAttribute("aria-hidden", !isCurrent);
      slide.setAttribute("aria-current", isCurrent);
      this.dots[index].setAttribute("aria-selected", isCurrent);
    });
  }

  next() {
    this.current = (this.current + 1) % this.slides.length;
    this.updateSlider();
  }

  prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    this.updateSlider();
  }

  goTo(index) {
    this.current = index;
    this.updateSlider();
  }

  updateSlider() {
    const offset = -this.current * 100;
    document.querySelector(
      ".slider",
    ).style.transform = `translateX(${offset}%)`;
    this.updateAria();

    // Lazy loading para imágenes no cargadas
    const currentSlide = this.slides[this.current];
    const img = currentSlide.querySelector("img");
    if (!img.complete && img.dataset.src) {
      img.src = img.dataset.src;
    }
  }
}

// Inicialización
new Slider();
