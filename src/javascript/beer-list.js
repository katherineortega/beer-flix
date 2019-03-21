import api from './api';

const {getBeers} = api();

const templateShow = ({name, image, _id}) => `
<p>${name}</p>
<img src="${image}" alt="${_id}">
`;

const renderShows = (element, shows) => {
	console.log(shows);

	element.innerHTML = shows.map((show) => {
		return templateShow(show);
	}).join('');
};


const renderDOMBeerList = async () => {
	try {
		const fetchBeerList = await getBeers();
		const showBeerList = document.getElementById('beer-list');
		renderShows(showBeerList, fetchBeerList);
	} catch (e) {
		console.error(e);
	}
};

renderDOMBeerList();


export default renderDOMBeerList;
