document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("[data-menu-list]");
  const toggle = document.querySelector("[data-menu-toggle]");

  if (menu && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });
  }

  const carousel = document.querySelector("[data-carousel]");

  if (carousel) {
    const image = carousel.querySelector("[data-carousel-image]");
    const legend = carousel.querySelector("[data-carousel-legend]");
    const year = carousel.querySelector("[data-carousel-year]");
    const previous = carousel.querySelector("[data-carousel-previous]");
    const next = carousel.querySelector("[data-carousel-next]");

    let index = Number(carousel.dataset.currentIndex || 0);
    const items = JSON.parse(carousel.dataset.items || "[]");

    const render = () => {
      const current = items[index];

      if (!current) {
        return;
      }

      image.src = current.url;
      image.alt = current.legend;
      legend.textContent = current.legend;
      year.textContent = current.year;
      carousel.dataset.currentIndex = String(index);
    };

    previous?.addEventListener("click", () => {
      index = index === 0 ? items.length - 1 : index - 1;
      render();
    });

    next?.addEventListener("click", () => {
      index = index === items.length - 1 ? 0 : index + 1;
      render();
    });

    render();
  }
});
