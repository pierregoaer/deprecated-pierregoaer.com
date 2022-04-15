// ------ Loading ------
const body = document.querySelector('body');
// setTimeout(() => {
// 	body.classList.remove('hidden');
// 	body.style.opacity = '1';
// }, 800);

// ------ Dark Mode ------
const toggle = document.querySelector('.toggle-container');
const siteWrapper = document.querySelector('.site-wrapper');
const darkmodeElement = document.querySelector('.darkmode-element');

toggle.onclick = () => {
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
	duration: 2000,
	distance: '60px',
	delay: 0,
	// cleanup: true,
});

sr.reveal('.section-title', { origin: 'left', delay: 200 });
sr.reveal('.hero-section', { origin: 'bottom', delay: 200 });
sr.reveal('.about-section', { origin: 'bottom', delay: 200 });

sr.reveal('.tech-stack-category', { origin: 'bottom', interval: 150 });

sr.reveal('.main-pr-1 .main-pr-picture-container', { origin: 'left' });
sr.reveal('.main-pr-1 .main-pr-text', { origin: 'right' });
sr.reveal('.main-pr-2 .main-pr-picture-container', { origin: 'right' });
sr.reveal('.main-pr-2 .main-pr-text', { origin: 'left' });
sr.reveal('.main-pr-3 .main-pr-picture-container', { origin: 'left' });
sr.reveal('.main-pr-3 .main-pr-text', { origin: 'right' });
sr.reveal('.main-pr-4 .main-pr-picture-container', { origin: 'right' });
sr.reveal('.main-pr-4 .main-pr-text', { origin: 'left' });
sr.reveal('.main-pr-5 .main-pr-picture-container', { origin: 'left' });
sr.reveal('.main-pr-5 .main-pr-text', { origin: 'right' });

sr.reveal('.secondary-pr-displayed', { origin: 'bottom', delay: 200, interval: 150, scale: 0.9 });

sr.reveal('.contact-section');

// ------ More Secondary Projects ------
const seeMoreProjectsButton = document.querySelector('.see-more-sec-pr');
const hiddenSecondaryProjects = document.querySelectorAll('.secondary-pr.hidden');

seeMoreProjectsButton.onclick = () => {
	hiddenSecondaryProjects.forEach(project => {
		project.classList.toggle('hidden');
	});
	seeMoreProjectsButton.innerText == 'See more' ? (seeMoreProjectsButton.innerText = 'See less') : (seeMoreProjectsButton.innerText = 'See more');
};
