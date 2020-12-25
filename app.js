const body = document.querySelector('body');
const navButton = document.querySelector('.nav__button');
const navLinks = document.querySelector('.nav-links');
const navButtonIco = document.querySelector('.nav__button__ico');
navButton.addEventListener('click', () => {
	navLinks.classList.toggle('show');
	if (navButtonIco.innerHTML === 'menu') {
		navButtonIco.innerHTML = 'clear';
		body.style.overflowY = 'hidden';
	} else {
		navButtonIco.innerHTML = 'menu';
		body.style.overflowY = 'auto';
	}
});
