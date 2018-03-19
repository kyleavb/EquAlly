import React from 'react';
import { Tabs, Tab } from 'react-materialize';
import TabImage1 from './img/support-icon.png';
import TabImage2 from './img/safespace.png';
import TabImage3 from './img/diversity-icon.png';
import TabImage4 from './img/security-icon.ico';

export default () => (
	<div className='col s12 m12 l6 tab-container section'>
		<Tabs className='tab'>
		    <Tab title="Support" className='col s3' active>
			<div id="tab1" className="tab-content">
		 	 		<h5>We're here for you.</h5>
		 	 		<img className='tab-img' src={TabImage1} alt=""/>
		 	 		<p>With experts available 24/7, we are a team wholeheartedly dedicated to your well-being and safety. In such a tumultuous political climate, it is of the utmost importance that we all feel like we have someone to confide in, no matter the topic. We are steadfast in our support for <em>all</em> people.</p>
		 	 	</div>
		 	 </Tab>

		    <Tab title="Safe" className='col s3' >
		    	<div id="tab2" className="s12 tab-content">
			    	<h5>This is a safe space.</h5>
		 	 		<img className='tab-img' src={TabImage2} alt=""/>
		 	 		<p>We go to great lengths to protect our users from any volatile individuals who may seek to harm or harass them. We have implemented thorough background checks and language filters as an initial safeguard. If you spot any incendiary language or behavior, please report it.</p>
			    </div>
			</Tab>

		    <Tab title="Diverse" className='col s3' >
		    	<div id="tab3" className="s12 tab-content">
			    	<h5>Nobody is excluded.</h5>
		 	 		<img className='tab-img' src={TabImage3} alt=""/>
		 	 		<p>equ<em>ally</em> was created to encourage the inclusion and coexistence of people from all walks of life--all skin colors, all sexual orientations, all genders. We have a zero tolerance policy for discrimination or exclusionary ideology.</p>
			    </div>
			</Tab>

		    <Tab title="Secure" className='col s3' >
		    	<div id="tab4" className="s12 tab-content">
			    	<h5>Your information is safe.</h5>
		 	 		<img className='tab-img' src={TabImage4} alt=""/>
		 	 		<p>In your Profile Journal, your entries are encrypted. You're the only one that can access that--not even our developers can access it. We want you to be able to feel like you can express yourself without worrying that someone will find out. </p>
			    </div>
			</Tab>
		</Tabs>
	</div>
)
