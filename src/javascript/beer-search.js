import renderDOMBeerList from './beer-list';
import moment from 'moment';
import common from './common';

const {searchForm, filterDate} = common;

filterDate.addEventListener('submit', (event) => {
	event.preventDefault();

	submitFilterAndSearch();
});

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	submitFilterAndSearch();
});


const submitFilterAndSearch = () => {
	const filter = filterDate.elements.namedItem('inputDate').value;
	const date = moment(filter, 'YYYY-MM');
	const search = searchForm.elements.namedItem('inputSearch').value;

	if (search !== '' && date.isValid()) {
		renderDOMBeerList({search: search, date: date});
	} else if (search !== '' && !date.isValid()) {
		renderDOMBeerList({search: search});
	} else if (search === '' && date.isValid()) {
		renderDOMBeerList({date: date});
	} else {
		renderDOMBeerList();
	}
};

