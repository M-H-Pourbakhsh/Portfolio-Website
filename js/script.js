//////////// Mobile Navigation ////////////
const navBtn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
function navToggle() {
  header.classList.toggle('nav-open');
}
navBtn.addEventListener('click', navToggle);

//////////// Scroll Sections ////////////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelector('.nav-link[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  //////////// Sticky Header ////////////
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 50);

  header.classList.remove('nav-open');
};
