import React from 'react';
import { Carousel } from 'react-materialize';
import { Button, Card, Row, Col } from 'react-materialize';

export default () => (
		<Carousel 
			fixedItem={
				<div>
				<h3 className='yellow-text text-darken-2 carousel-h3'>Talk to someone about it.</h3>
				<p className='center white-text carousel-p'>Whatever you may be going through, we have someone who can help. Chat with an expert about it without fear of judgment.</p>
				<br/><br/><br/>
				<button className='btn waves-effect pink lighten-2 white-text'>Chat now!</button>
				</div>
			}
			options={{fullWidth: true, indicators: true}}
			images={[
				'http://www.placekitten.com/g/800/400',
				'http://www.placekitten.com/g/800/400',
				'http://www.placekitten.com/g/800/400',
				'http://www.placekitten.com/g/800/400'
				]}
		/>
	)