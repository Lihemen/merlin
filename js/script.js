const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menu_branding = document.querySelector('.menu-branding');
const menu_nav = document.querySelector('.menu-nav');
const nav_items = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menu_btn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menu_btn.classList.add('close');
		menu.classList.add('show');
		menu_nav.classList.add('show');
		menu_branding.classList.add('show');
		nav_items.forEach((item) => {
			item.classList.add('show');
		});

		showMenu = true;
	} else {
		menu_btn.classList.remove('close');
		menu.classList.remove('show');
		menu_nav.classList.remove('show');
		menu_branding.classList.remove('show');
		nav_items.forEach((item) => {
			item.classList.remove('show');
		});

		showMenu = false;
	}
}
