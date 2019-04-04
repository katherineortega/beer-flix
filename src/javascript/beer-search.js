import renderDOMBeerList from './beer-list';

const searchForm = document.getElementById('search-form');
const filterDate = document.getElementById('filterDate');

filterDate.addEventListener('change', (event) => {
	event.preventDefault();

	const value = filterDate.value;
	console.dir(value);
});

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const value = searchForm.elements.namedItem('inputSearch').value;
	if (value !== '') {
		renderDOMBeerList(value);
	}
	console.log(value);
});
