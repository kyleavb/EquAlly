import React, { Component } from 'react';

class Map extends Component {

	render () {
		var query = '';
		if (!this.props.query) {
			query = ' '
		} else {
			query = this.props.query 
		}

		const apiUrl = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBC82fgM9Egj2WTW5zFqxPz79vWuyIys_g&q=${query}&center=47.6139781,-122.3352092&zoom=14`
		
		return(
			<iframe title='map'
			  width="100%"
			  height="100%"
			  frameBorder="0" style={{border:0}}
			  src={apiUrl}>
			</iframe>
		)
	}
}

export default Map;