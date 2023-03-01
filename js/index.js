const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const initialHeight = window.innerWidth < 768 ? 70 : 45;
  if (scrollPosition >= initialHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});