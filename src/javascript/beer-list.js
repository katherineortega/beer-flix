import api from './api';

const {getBeers} = api();


const renderDOMBeerList = async () => {
	try {
		const fetchShows = await getBeers();
		console.log(fetchShows);
	} catch (e) {
		console.error(e);
	}
};

renderDOMBeerList();


export default renderDOMBeerList;
