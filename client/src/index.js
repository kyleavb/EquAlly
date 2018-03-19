import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'


// **** materialize inits **** //
// $(document).ready(function) {
	//mobile hamburger menu activator for nav
	$('.button-collapse').sideNav();
	//dropdown button on nav
	$(".dropdown-button").dropdown({hover: false});
	//carousel initialization
	$('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
	function autoplay() {
    	$('.carousel').carousel('next');
    	setTimeout(autoplay, 4500);
	}
	autoplay();
	//tabs init
	$('ul.tabs').tabs();
	//dropdown menu init
    $('select').material_select();
// }

ReactDOM.render(<App />, document.getElementById('root'));
unregisterServiceWorker();
