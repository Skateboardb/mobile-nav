const burger = $('.burger');
const nav = $('.nav-links');
const navLinks = $('.nav-links>li');

burger.on('click', () => {
  nav.toggleClass('nav-active');
  navLinks.each((index, element) => {
    console.log(index);
  });
});
