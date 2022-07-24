const navItem = document.querySelector('a.toggle-nav');
//let count = 0;

function toggleNavigation() {
    this.nextElementSibling.classList.toggle('active');
}
navItem.addEventListener('click', toggleNavigation);