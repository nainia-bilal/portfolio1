/* script.js - typing animation, mobile nav toggle, and simple UI helpers */
document.addEventListener("DOMContentLoaded", () => {
  // Typing animation
  const textElement = document.querySelector(".typing-text");
  if (textElement) {
    const texts = ["Web Developer", "Management Student", "Creative Designer"];
    let t = 0,
      i = 0,
      current = "";
    (function type() {
      if (t >= texts.length) t = 0;
      current = texts[t];
      textElement.textContent = current.slice(0, ++i);
      if (i === current.length) {
        t++;
        i = 0;
        setTimeout(type, 1800);
      } else {
        setTimeout(type, 90);
      }
    })();
  }

  // Mobile navbar toggle
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    // We'll use a full-screen overlay for mobile instead of toggling the inline menu.
    const logo =
      document.getElementById("logo") || document.querySelector("nav a");

    // Create overlay element (hidden by default)
    const overlay = document.createElement("div");
    overlay.id = "mobile-overlay";
    overlay.className =
      "fixed inset-0 z-50 bg-bg hidden flex-col items-center justify-center";
    overlay.innerHTML = `
      <button id="overlay-close" aria-label="Close menu" class="absolute top-6 right-6 p-2 rounded-md border border-gray-700 text-white">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <nav class="flex flex-col items-center justify-center space-y-6">
        <a href="index.html" class="text-3xl font-bold hover:text-main">Home</a>
        <a href="about.html" class="text-3xl font-bold hover:text-main">About</a>
        <a href="education.html" class="text-3xl font-bold hover:text-main">Education</a>
        <a href="experience.html" class="text-3xl font-bold hover:text-main">Experience</a>
        <a href="projects.html" class="text-3xl font-bold hover:text-main">Projects</a>
        <a href="contact.html" class="text-3xl font-bold hover:text-main">Contact</a>
      </nav>
    `;
    document.body.appendChild(overlay);

    const openOverlay = () => {
      overlay.classList.remove("hidden");
      overlay.classList.add("flex");
      btn.classList.add("hidden");
      if (logo) logo.classList.add("hidden");
      btn.setAttribute("aria-expanded", "true");
      document.body.classList.add("overflow-hidden");
    };

    const closeOverlay = () => {
      overlay.classList.remove("flex");
      overlay.classList.add("hidden");
      btn.classList.remove("hidden");
      if (logo) logo.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("overflow-hidden");
    };

    btn.addEventListener("click", openOverlay);

    // Close button inside overlay
    overlay
      .querySelector("#overlay-close")
      .addEventListener("click", closeOverlay);

    // Close when any overlay link is clicked
    overlay
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", closeOverlay));
  }

  // Stagger fade-in animations for elements with .fade-in-up
  const fades = Array.from(document.querySelectorAll(".fade-in-up"));
  fades.forEach((el, idx) => el.style.setProperty("--delay", `${idx * 0.06}s`));

  // Initialize VanillaTilt for elements with data-tilt (if loaded)
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.25,
    });
  }
});
