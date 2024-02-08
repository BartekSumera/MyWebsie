//*************NAV**********

const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navButton = document.querySelector('.nav__button');
const navOpen = document.querySelector('.nav__open');
const navAll = document.querySelector('nav__link');

navButton.addEventListener("click", () => {
	navLinks.classList.toggle("nav__links--active");
	

});

navAll.forEach((el) => {
	el.addEventListener("click", () => {
		navLinks.classList.remove("nav__links--active");
	
	});
});

window.addEventListener("scroll", () => {
	if (window.scrollY > 80) {
		nav.classList.add("nav__bgc");
	} else {
		nav.classList.remove("nav__bgc");
	}
});
