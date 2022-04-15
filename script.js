// ------ Loading ------
// const body = document.querySelector('body');
// setTimeout(() => {
// 	body.classList.remove('hidden');
// 	body.style.opacity = '1';
// }, 800);

// ------ Dark Mode ------
const toggle = document.querySelector('.toggle-container');
const siteWrapper = document.querySelector('.site-wrapper');
const darkmodeElement = document.querySelector('.darkmode-element');

toggle.onclick = () => {
	console.log('Change light');
	body.classList.toggle('dark-mode-on');
	// darkmodeElement.classList.toggle('dark-mode-on');

	// Have all the other elements change colour after propagation of the dark mode element
	// setTimeout(() => {
	// 	siteWrapper.classList.toggle('dark-mode-on');
	// 	// body.classList.toggle('dark-mode-on');
	// }, 800);
};

// ------ Mobile Navigation ------

const mobileNavIconContainer = document.querySelector('.mobile-nav-icon-container');
const mobileNavIcon = document.querySelectorAll('.mobile-nav-icon');
const mainNavigation = document.querySelector('.main-navigation');
const mainNavigationLinks = document.querySelectorAll('.main-navigation a');

mobileNavIconContainer.addEventListener('click', function () {
	mobileNavIconContainer.classList.toggle('active');
	siteWrapper.classList.toggle('hidden');
	mobileNavIcon.forEach(bar => bar.classList.toggle('active'));
	const visibility = mainNavigation.getAttribute('data-visible');
	if (visibility === 'false') mainNavigation.setAttribute('data-visible', true);
	if (visibility === 'true') mainNavigation.setAttribute('data-visible', false);
});

mainNavigationLinks.forEach(
	link =>
		(link.onclick = () => {
			mobileNavIcon.forEach(bar => bar.classList.remove('active'));
			mobileNavIconContainer.classList.remove('active');
			siteWrapper.classList.remove('hidden');
			const visibility = mainNavigation.getAttribute('data-visible');
			if (visibility === 'false') mainNavigation.setAttribute('data-visible', true);
			if (visibility === 'true') mainNavigation.setAttribute('data-visible', false);
		})
);

// ------ Reveal Animation ------
let sr = ScrollReveal({
	duration: 2500,
	distance: '60px',
});

sr.reveal('.hero-section');
sr.reveal('.about-section');
