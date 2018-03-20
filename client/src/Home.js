import React from 'react';
import Carousel from './Carousel';
import HomeTabs from './HomeTabs';
import HomeResources from './HomeResources';
import HomeRSS from './HomeRSS';


const Home = () => (
	<div>
		<Carousel />
		<div className='row main-info'>
			<HomeTabs />
			<HomeResources />
			<HomeRSS />
		</div>
	</div>
)

export default Home;
