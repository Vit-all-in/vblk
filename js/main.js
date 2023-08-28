function scrollHeader(){
   const header = document.getElementById('header');
   if(this.scrollY >= 90) header.classList.add('scroll-header');
   else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

var swiperPopular = new Swiper(".popular__container", {
   spaceBetween: 32, 
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   loop: true,
   navigation :{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   }
})

const accordionItems = document.querySelectorAll('.value__accordion-item');

accordionItems.forEach((item) => {
   const accordionHeader = item.querySelector('.value__accordion-header');

   accordionHeader.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-open');
      toggleitem(item);

      if(openItem && openItem!== item){
         toggleitem(openItem);
      }
   })
})

const toggleitem = (item) => {
   const accordionContent = item.querySelector('.value__accordion-content');

   if(item.classList.contains('accordion-open')) {
      accordionContent.removeAttribute('style');
      item.classList.remove('accordion-open');
   } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px';
      item.classList.add('accordion-open');
   }
}

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
   const scrollY = window.pageYOffset

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
   })
};

window.addEventListener('scroll', scrollActive);

function scrollUp(){
   const scrollUp = document.getElementById('scroll-up');
   if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

if(selectedTheme){
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
   themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);
   localStorage.setItem('selected-theme', getCurrentTheme());
   localStorage.setItem('selected-icon', getCurrentIcon());
})

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400
})

sr.reveal('.home__title, .popular__container, .footer__container')
sr.reveal('.home__description', {delay: 500})
sr.reveal('.home__value', {delay: 700})
sr.reveal('.home__images', {delay: 900, origin: 'bottom'})
sr.reveal('.value__images, .contact__content', { origin: 'left'})
sr.reveal('.value__content, .contact__images', { origin: 'right'})