import React from 'react';
import { Carousel } from 'react-materialize';
import CarouselImage1 from './img/couple-walking-sm.jpg';
import CarouselImage2 from './img/seattle-trans-pride-march-sm.jpg';
import CarouselImage3 from './img/hands-sm.jpg';
import CarouselImage4 from './img/heart-hands-sm.jpg';
declare var $: any;


export default () => {   

	autoplay()   
	function autoplay() {
    	$('.carousel').carousel('next');
    	setTimeout(autoplay, 4500);
	}

	return (
		<Carousel
			fixedItem={
				<div>
				<h3 className='yellow-text text-darken-2 carousel-h3'>Talk to someone about it.</h3>
				<p className='center white-text carousel-p'>Whatever you may be going through, we have someone who can help. Chat with an expert about it without fear of judgment.</p>
				<br/><br/><br/>
				<a className='btn waves-effect pink lighten-2 white-text' href='/chat'>Chat now!</a>
				</div>
			}

			options={{fullWidth: true, indicators: true}}

			images={[
				CarouselImage1,
				CarouselImage2,
				CarouselImage3,
				CarouselImage4
				]}

		/>

	)

}