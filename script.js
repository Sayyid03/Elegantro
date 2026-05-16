const btn = document.getElementById("scrolltopbtn");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

let currentSlider = 0;
const maxSlide = slides.length;

function toggleActive() {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}
hamburger.addEventListener("click", toggleActive);

function removeActive() {
  navLinks.classList.remove("active");
  hamburger.classList.remove("active");
}
document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", removeActive);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function goToSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}

goToSlide(0);

function nextSlide() {
  if (currentSlider === maxSlide - 1) {
    currentSlider = 0;
  } else {
    currentSlider++;
  }
  goToSlide(currentSlider);
}

function prevSlide() {
  if (currentSlider === 0) {
    currentSlider = maxSlide - 1;
  } else {
    currentSlider--;
  }
  goToSlide(currentSlider);
}

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

const links = document.querySelectorAll(".filters a");
const cards = document.querySelectorAll(".card");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const filter = link.getAttribute("data-filter");

    // ACTIVE LINK
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // FILTER CARDS
    cards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

const openWhatsappModal = document.getElementById("openWhatsappModal");
const whatsappModal = document.getElementById("whatsappModal");
const closeWhatsappModal = document.getElementById("closeWhatsappModal");

openWhatsappModal.addEventListener("click", (e) => {
  e.preventDefault();
  whatsappModal.classList.add("show");
});

closeWhatsappModal.addEventListener("click", function () {
  removeModal();
});

window.addEventListener("click", (e) => {
  if (e.target === whatsappModal) {
    removeModal();
  }
});

function removeModal() {
  whatsappModal.classList.remove("show");
}
