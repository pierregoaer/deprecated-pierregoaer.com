const toggle = document.querySelector('.toggle-container');
const body = document.querySelector('body');
const siteWrapper = document.querySelector('.site-wrapper');
const darkmodeElement = document.querySelector('.darkmode-element');

//Turn on/off Dark Mode
// Initialize dark mode on first load
// body.classList.add('dark-mode-on');
siteWrapper.classList.add('dark-mode-on');
darkmodeElement.classList.add('dark-mode-on');

toggle.onclick = () => {
	// body.classList.toggle('dark-mode-on');
	darkmodeElement.classList.toggle('dark-mode-on');

	// Have all the other elements change colour after propagation of the dark mode element
	setTimeout(() => siteWrapper.classList.toggle('dark-mode-on'), 800);

	// Tried using transition end but it's firing multiple times and the same type everytime
	// darkmodeElement.addEventListener('transitionend', e => {
	// 	console.log(e);
	// siteWrapper.classList.toggle('dark-mode-on');
	// });
};
