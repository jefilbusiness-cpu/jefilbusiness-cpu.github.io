// Número real da Jefil Business (confirmado na página de Facebook)
const WHATSAPP_NUMBER = "244944966205";

document.addEventListener("DOMContentLoaded", function () {
  // Build all WhatsApp links from data-msg attributes
  document.querySelectorAll(".wa-link").forEach(function (link) {
    var msg = link.getAttribute("data-msg") || "Olá, vim do site da Jefil.";
    link.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  // Mobile menu
  var burger = document.getElementById("burgerBtn");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  // Floating WhatsApp bubble: show label briefly, then collapse to icon only
  var label = document.querySelector(".wa-fab .label");
  if (label) {
    var hideTimer = setTimeout(function () {
      label.classList.add("hidden");
    }, 4000);

    function revealLabel() {
      label.classList.remove("hidden");
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        label.classList.add("hidden");
      }, 4000);
    }

    document.querySelector(".wa-fab .bubble").addEventListener("click", revealLabel);
    window.addEventListener("scroll", function () {
      if (window.scrollY < 40) revealLabel();
    });
  }
});
