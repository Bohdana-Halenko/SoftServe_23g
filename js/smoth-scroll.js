const headerHeight = window.innerWidth < 768 ? 120 : 70; 
const links = document.querySelectorAll('.header__item-link');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();

    const href = this.getAttribute('href');
    const target = document.querySelector(href);

    const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
    const headerOffset = window.innerWidth < 768 ? headerHeight : headerHeight - 0; 
    const totalOffset = topOffset - headerOffset;

    window.scrollTo({
      top: totalOffset,
      behavior: 'smooth'
    });
  });
}