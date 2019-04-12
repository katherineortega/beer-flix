import replaceText from './common';
import moment from 'moment';


const API_KEY = 'ZQ3XMHZ-WQ44ACS-Q88AE83-Q18AXWB';
const GET_BEERS = '/beers';
const GET_BEER_DETAIL = '/beers/?';
const LIKE_BEER = '/beers/?/like';
const COMMENT_BEER = '/beers/?/comment';
const LIMIT_RESPONSE = 10;

const getHeader = () => {
	return {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': API_KEY
		}
	};
};

const postHeader = (body) => {
	let obj = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': API_KEY
		}
	};

	if (body) {
		obj = {...obj, body: JSON.stringify(body)};
	}
	return obj;
};

const setQueryParams = (query) => {
	if (query && query.search) {
		return `?search=${query}&limit=${LIMIT_RESPONSE}`;
	}
	return '';
};

const filterByDate = (data, filter) => {
	if (filter && filter.date) {
		const filterDate = moment(filter.date);
		return data.beers.filter((item) => {
			const itemDate = moment(item.firstBrewed, 'MM/YYYY');
			return itemDate.isSameOrAfter(filterDate);
		});
	}
	return data.beers;
};

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1') => {
	return {
		getBeers: async (query) => {
			try {
				const requestUrl = `${API_URL}${GET_BEERS}${setQueryParams(query)}`;
				const response = await fetch(requestUrl, getHeader());
				const data = await response.json();
				return await filterByDate(data, query);
			} catch (e) {
				console.error(e);
				throw e;
			}
		},
		getBeerDetail: async (id) => {
			try {
				const requestUrl = `${API_URL}${replaceText(GET_BEER_DETAIL, id)}`;
				const response = await fetch(requestUrl, getHeader());
				console.log(response);
				const data = await response.json();
				console.log(data);
				return data;
			} catch (e) {
				console.error(e);
				throw e;
			}
		},
		postLikeBeer: async (id) => {
			try {
				const requestUrl = `${API_URL}${replaceText(LIKE_BEER, id)}`;
				const response = await fetch(requestUrl, postHeader());
				console.log(response);
				const data = await response.json();
				console.log(data);
				return data;
			} catch (e) {
				console.error(e);
				throw e;
			}
		},
		postCommentBeer: async (id, comment) => {
			try {
				const requestUrl = `${API_URL}${replaceText(COMMENT_BEER, id)}`;
				const response = await fetch(requestUrl, postHeader({comment: comment}));
				console.log(response);
				const data = await response.json();
				console.log(data);
				return data;
			} catch (e) {
				console.error(e);
				throw e;
			}
		}
	};
};


export default api;
