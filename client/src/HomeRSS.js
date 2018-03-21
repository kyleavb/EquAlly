import React from 'react';
import {Timeline} from 'react-twitter-widgets';

const HomeRSS = () => (

	<div className='col s6 m6 l3 rss section'>
		<h5 className='yellow-text text-darken-2'>RSS Feed</h5>
		<Timeline
		    dataSource={{
		      sourceType: 'profile',
		      screenName: 'ACLU'
		    }}
		    options={{
		      username: 'ACLU',
		      height: '400'
		    }}
		    onLoad={() => console.log('Timeline is loaded!')}
		  />
	</div>

)

export default HomeRSS;
