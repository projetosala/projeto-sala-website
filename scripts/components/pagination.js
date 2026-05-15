export function initPagination() {
  const paginations = document.querySelectorAll("[data-pagination]");

  paginations.forEach((pagination) => {
    const items = Array.from(pagination.querySelectorAll("[data-page-item]"));
    const controls = pagination.parentElement?.querySelector("[data-pagination-controls]");
    const previous = controls?.querySelector("[data-pagination-previous]");
    const next = controls?.querySelector("[data-pagination-next]");
    const status = controls?.querySelector("[data-pagination-status]");
    const perPage = Number(pagination.dataset.perPage || 3);
    const totalPages = Math.ceil(items.length / perPage);

    if (!controls || !previous || !next || !status || totalPages <= 1) {
      if (controls) {
        controls.hidden = true;
      }

      items.forEach((item) => {
        item.hidden = false;
      });
      return;
    }

    let currentPage = 1;

    const renderPage = () => {
      const start = (currentPage - 1) * perPage;
      const end = start + perPage;

      items.forEach((item, index) => {
        item.hidden = index < start || index >= end;
      });

      status.textContent = `Página ${currentPage} de ${totalPages}`;
      previous.disabled = currentPage === 1;
      next.disabled = currentPage === totalPages;
    };

    previous.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage -= 1;
        renderPage();
      }
    });

    next.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage += 1;
        renderPage();
      }
    });

    renderPage();
  });
}
