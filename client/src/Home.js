import React from 'react';
import { Row, Col } from 'react-materialize';
import Carousel from './Carousel';
import Navbar from './Nav';
import HomeTabs from './HomeTabs';
import HomeResources from './HomeResources';
import HomeRSS from './HomeRSS';
import Footer from './Footer';

const Home = () => (
	<div>
		<Navbar />
		<Carousel />
		<div className='row main-info'>
			<HomeTabs />
			<HomeResources />
			<HomeRSS />
		</div>
		<Footer />
	</div>
)

export default Home;