class Slider {
  constructor() {
    this.slides = document.querySelectorAll(".slider__slide");
    this.dots = document.querySelectorAll(".slider__dot");
    this.current = 0;
    this.init();
  }

  init() {
    // Eventos de teclado
    document.addEventListener("keydown", (keyEvent) => {
      if (keyEvent.key === "ArrowLeft") this.prev();
      if (keyEvent.key === "ArrowRight") this.next();
    });

    // Eventos de ratón/táctiles
    document
      .getElementById("sliderPrev")
      .addEventListener("click", () => this.prev());
    document
      .getElementById("sliderNext")
      .addEventListener("click", () => this.next());

    // Paginación
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goTo(index));
    });

    // Autoplay (opcional)
    // this.autoplay = setInterval(() => this.next(), 5000);
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

  updateAria() {
    this.slides.forEach((slide, index) => {
      const isCurrent = index === this.current;

      slide.setAttribute("aria-hidden", !isCurrent);
      slide.setAttribute("aria-current", isCurrent);

      this.dots[index].setAttribute("aria-selected", isCurrent);
    });

    this.paintDot();
  }

  paintDot() {
    this.dots.forEach((dot, index) => {
      const currentDot = dot.getAttribute("aria-selected");

      if (currentDot === "true") {
        this.dots[index].classList.add("slider__dot--active");
      } else {
        this.dots[index].classList.remove("slider__dot--active");
      }
    });
  }

  updateSlider() {
    const wrapper = document.getElementById("sliderWrapper");
    const offset = -this.current * 100;

    wrapper.style.transform = `translateX(${offset}%)`;
    
    
    this.updateAria();

    // slide.style.transform = `translateX(${offset}%)`;

    // Lazy loading para imágenes no cargadas
    // const currentSlide = this.slides[this.current];
    // const img = currentSlide.querySelector("picture");
    // if (!img.complete && img.dataset.srcset) {
    //   img.srcset = img.dataset.srcset;
    // }
  }
}

// Inicialización
new Slider();
