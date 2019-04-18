import moment from 'moment';

const LIMIT_RESPONSE = 10;

const common = {
	searchForm: document.getElementById('search-form'),
	filterDate: document.getElementById('filter-form'),

	replaceText: (value, text) => {
		return value.replace('?', text);
	},


	updateFilterAndSearch: query => {
		if (query.search) {
			common.searchForm.elements.namedItem('inputSearch').value = query.search;
		}
		if (query.date) {
			common.filterDate.elements.namedItem('inputDate').value = moment(query.date).format('YYYY-MM');
		}
	},


	saveFilter: (query) => {
		console.log(query);
		if (query) {
			localStorage.setItem('filter', JSON.stringify(query));
		} else {
			const filter = localStorage.getItem('filter');
			if (filter) {
				const savedFilter = JSON.parse(filter);
				common.updateFilterAndSearch(savedFilter);
				return savedFilter;
			}
		}
		return query;
	},

	setQueryParams: (query) => {
		if (query && query.search) {
			return `?search=${query.search}&limit=${LIMIT_RESPONSE}`;
		}
		return '';
	},

	filterByDate: (data, filter) => {
		if (filter && filter.date) {
			const filterDate = moment(filter.date);
			return data.beers.filter((item) => {
				const itemDate = moment(item.firstBrewed, 'MM/YYYY');
				return itemDate.isSameOrAfter(filterDate);
			}).slice(0, LIMIT_RESPONSE);
		}
		return data.beers;
	}
};

export default common;
