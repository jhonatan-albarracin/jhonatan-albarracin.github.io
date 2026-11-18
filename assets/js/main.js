/* Solo dos cosas: abrir el menú móvil y copiar el email. */
(function () {
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const panel = document.getElementById("nav-menu");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      panel.classList.toggle("is-open", !open);
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        panel.classList.remove("is-open");
      });
    });
  }

  const button = document.getElementById("copy-email");
  const feedback = document.getElementById("copy-feedback");

  if (button && feedback) {
    button.addEventListener("click", async function () {
      const email = button.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        feedback.textContent = "Email copiado.";
      } catch (error) {
        feedback.textContent = "Copia manual: " + email;
      }
    });
  }
})();
