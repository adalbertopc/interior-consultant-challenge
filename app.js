const navButton = document.querySelector('.nav__button');
const navLinks = document.querySelector('.nav-links');
const navButtonIco = document.querySelector('.nav__button__ico');
navButton.addEventListener('click', () => {
	navLinks.classList.toggle('show');
	if (navButtonIco.innerHTML === 'menu') {
		navButtonIco.innerHTML = 'clear';
	} else {
		navButtonIco.innerHTML = 'menu';
	}
});
