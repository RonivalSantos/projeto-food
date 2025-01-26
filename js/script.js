// menu suspenso
const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");
mobileBtn.onclick = () => {
  mobileMenu.classList.toggle("ativo");
  mobileBtn.classList.toggle("trocar");
};
// -----------------

// scroll suave
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  // --- forma alternativa ---
  // const topo = section.offsetTop;
  // window.scrollTo({
  //   top: topo,
  //   behavior: "smooth",
  // });
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
// -----------------------

// animação lateral

const sections = document.querySelectorAll(".js-animacao");
const window60 = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - window60;
    if (sectionTop < 0) {
      section.classList.add("ativo");
    }
  });
}
animaScroll();
window.addEventListener("scroll", animaScroll);

// click no botao menu

// Seleciona todos os itens da navbar (li.nav-item)
const navItems = document.querySelectorAll("#nav-list .nav-item, #mobile-nav-list .nav-item");

// Adiciona evento de clique a cada item
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove a classe 'active' de todos os itens
    navItems.forEach((navItem) => navItem.classList.remove("active"));

    // Adiciona a classe 'active' ao item clicado
    item.classList.add("active");
  });
});
