// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika Humburgermenu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangan nav
const hambuger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
