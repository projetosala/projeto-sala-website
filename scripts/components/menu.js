export function initMenu() {
  const menu = document.querySelector("[data-menu-list]");
  const toggle = document.querySelector("[data-menu-toggle]");

  if (!menu || !toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });
}
