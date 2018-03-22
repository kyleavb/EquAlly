import React from 'react';
import Carousel from './Carousel';
import HomeTabs from './HomeTabs';
import HomeResources from './HomeResources';
import HomeRSS from './HomeRSS';
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return{ state }
}

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
export default connect(mapStateToProps)(Home)
//export default Home;
