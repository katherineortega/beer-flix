import api from './api';

const {getBeers} = api();

const templateShow = ({name, image, _id}) => `
<div class="card">
  <div class="card-header">
    <img src="${image ? image : '../images/default.png'}" alt="${_id}">
  </div>
  <div class="card-content">
    <p class="card-title">${name}</p>
  </div>
</div>
`;

const renderShows = (element, shows) => {
	console.log(shows);

	element.innerHTML = shows.map((show) => {
		return templateShow(show);
	}).join('');
};


const renderDOMBeerList = async (query) => {
	try {
		const fetchBeerList = await getBeers(query);
		const showBeerList = document.getElementById('beer-list');
		renderShows(showBeerList, fetchBeerList);
	} catch (e) {
		console.error(e);
	}
};

renderDOMBeerList();


export default renderDOMBeerList;
