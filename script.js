const toggle = document.querySelector('.toggle-container');
const body = document.querySelector('body');
const siteWrapper = document.querySelector('.site-wrapper');
const darkmodeElement = document.querySelector('.darkmode-element');

//Turn on/off Dark Mode
// Initialize dark mode on first load
// body.classList.add('dark-mode-on');
// siteWrapper.classList.add('dark-mode-on');
// darkmodeElement.classList.add('dark-mode-on');

toggle.onclick = () => {
	body.classList.toggle('dark-mode-on');
	// darkmodeElement.classList.toggle('dark-mode-on');

	// Have all the other elements change colour after propagation of the dark mode element
	// setTimeout(() => {
	// 	siteWrapper.classList.toggle('dark-mode-on');
	// 	// body.classList.toggle('dark-mode-on');
	// }, 800);
};

const mobileNavIiconContainer = document.querySelector('.mobile-nav-icon-container');
const mobileNavIcon = document.querySelectorAll('.mobile-nav-icon');
const mainNavigation = document.querySelector('.main-navigation');

mobileNavIiconContainer.addEventListener('click', function () {
	mobileNavIcon.forEach(bar => bar.classList.toggle('active'));
	const visibility = mainNavigation.getAttribute('data-visible');
	if (visibility === 'false') mainNavigation.setAttribute('data-visible', true);
	if (visibility === 'true') mainNavigation.setAttribute('data-visible', false);
});
