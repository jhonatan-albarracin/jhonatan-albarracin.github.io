/* Lo justo para la plantilla: índice móvil y sección activa al desplazarse. */
(function () {
  "use strict";

  const toggle = document.querySelector(".indice-toggle");
  const index = document.getElementById("indice");

  if (!toggle || !index) return;

  /* ---------- Índice móvil ---------- */
  toggle.addEventListener("click", function () {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.textContent = open ? "Índice +" : "Índice −";
    index.classList.toggle("is-open", !open);
  });

  const links = Array.from(index.querySelectorAll("a"));

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Índice +";
      index.classList.remove("is-open");
    });
  });

  /* ---------- Sección activa en el índice ---------- */
  const targets = links
    .map(function (link) {
      return { link: link, section: document.querySelector(link.getAttribute("href")) };
    })
    .filter(function (item) { return item.section; });

  if (!targets.length || !("IntersectionObserver" in window)) return;

  function markActive(section) {
    targets.forEach(function (item) {
      if (item.section === section) {
        item.link.setAttribute("aria-current", "location");
      } else {
        item.link.removeAttribute("aria-current");
      }
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) markActive(entry.target);
    });
  }, { rootMargin: "-60px 0px -70% 0px", threshold: 0 });

  targets.forEach(function (item) { observer.observe(item.section); });
})();
