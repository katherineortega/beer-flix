import './beer-search';


const navbar = document.getElementById('navbar');
const searchIcon = document.getElementById('navbar-search');
const closeIcon = document.getElementById('navbar-close');

const toggleClass = (element) => (removeClass, addClass) => {
	element.classList.remove(removeClass);
	element.classList.add(addClass);
};
const navbarVariable = toggleClass(navbar);

searchIcon.addEventListener('click', () =>
	navbarVariable('no-search', 'search'));

closeIcon.addEventListener('click', () =>
	navbarVariable('search', 'no-search'));


const openHeader = (id) => () => {
	const element = document.getElementById(id);
	element.classList.toggle('close');
};

export {
	openHeader,
};
