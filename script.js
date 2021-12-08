const toggle = document.querySelector('.toggle-container');
const body = document.querySelector('body');

//Turn on/off Dark Mode
// Initialize dark mode on first load (was too lazy to change that initially)
body.classList.add('dark-mode-on');

toggle.onclick = () => {
	// body.style.backgroundColor === 'var(--dark-background)' ? (body.style.backgroundColor = 'var(--light-background)') : (body.style.backgroundColor = 'var(--dark-background)');
	body.classList.toggle('dark-mode-on');
};
