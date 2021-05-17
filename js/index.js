const translate = document.querySelectorAll(".translate");
const logo = document.querySelector(".logo");
const logo_guideline = document.querySelector(".logo_guideline");
const mouse_scroll = document.querySelector(".mouse_scroll");
const hamburger_menu = document.querySelector(".hamburger_menu");
const header = document.querySelector("header");
const main = document.querySelector(".main");




let header_height = header.offsetHeight;


window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;


  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })

  logo.style.opacity = - scroll / (header_height / 4) + 1;
  logo_guideline.style.opacity = - scroll / (header_height / 3) + 1;
  mouse_scroll.style.opacity = - scroll / (header_height / 2.5) + 1;
  hamburger_menu.style.opacity = - scroll / (header_height / 2.5) + 1;
  
  // main.style.transform = `translateY(${scroll* speed}px)`;

})
