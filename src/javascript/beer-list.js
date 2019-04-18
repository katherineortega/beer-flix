import api from './api';
import common from './common';

const {getBeers} = api();
const {saveFilter} = common;

const templateShow = ({name, image, _id, firstBrewed, price}) => `
<div class="card">
  <div class="card-header">
    <img src="${image ? image : '../images/default.png'}" alt="${_id}">
  </div>
  <div class="card-content">
    <p class="card-title">${name}</p>
    
    <p class="card-information">
    	<span class="information-price">$ ${price}</span> 
    	<span class="information-date">${firstBrewed}</span>
    </p>
  </div>
</div>
`;

const renderShows = (element, shows) => {
	element.innerHTML = shows.map((show) => {
		return templateShow(show);
	}).join('');
};


const renderDOMBeerList = async (query) => {
	try {
		query = saveFilter(query);
		const fetchBeerList = await getBeers(query);
		const showBeerList = document.getElementById('beer-list');
		renderShows(showBeerList, fetchBeerList);
	} catch (e) {
		console.error(e);
	}
};

renderDOMBeerList();


export default renderDOMBeerList;
