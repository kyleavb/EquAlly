import React from 'react';
import Lemon from './img/lemon.jpg';
import Chilismaster from './img/chilismaster.jpg';
import Gonthor from './img/gonthor.jpg';
import LinkedIn from './img/linkedin.png';
import GitHub from './img/github.png';
import Email from './img/email.png';

export default () => (
	<div>
		<div class='row cyan darken-2'>
			<div class='col s12 m12 l8 offset-l2'>
				<h1 class='white-text about-us-title'>About Us</h1>
			</div>
		</div>
		<div class='row'>
			<div class='col s12 m12 l8 offset-l2'>
				<p class='about-body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		<div class='row'>
			<div class='col s12 m12 l8 offset-l2'>
				<div class='col s12 m12 l4 center'>
					<img class='mostly-human-developer' src={Chilismaster}/>
					<br/>
					<p className='yellow-text text-darken-2'>Daniel Heyward</p>
					<p class='about-desc'>Dan's past life in marketing helped shape his perception of how we as a community think and interact with each other, and finds that true power comes from using our strengths to help those less fortunate. His goal is to apply his fullstack talents to bridge the gap between optimistic opportunity and impactful reality.</p>
					<div class='col s12 center socials'>
						<a href='https://www.linkedin.com/in/danheyward'><img class='social-icons' src={LinkedIn}/></a>
						<a href='http://www.github.com/danheyward'><img class='social-icons' src={GitHub}/></a>
						<a href='mail-to:danheyward@gmail.com'><img class='social-icons' src={Email}/></a>
					</div>
				</div>
				<div class='col s12 m12 l4 center'>
					<img class='mostly-human-developer' src={Lemon}/>
					<br/>
					<p className='yellow-text text-darken-2'>Emily "Lemon" Garrett</p>
					<p class='about-desc'>Lemon is passionate about taking the opportunity to utilize the endless resources that technology provides to help those in need. She deeply believes in using technology for more than just creating the slickest new product or game; she believes in employing it to promote inclusivity and create change.</p>
					<div class='col s12 center socials'>
						<a href='https://www.linkedin.com/in/emilymariegarrett94'><img class='social-icons' src={LinkedIn}/></a>
						<a href='http://www.github.com/egarrett94'><img class='social-icons' src={GitHub}/></a>
						<a href='mail-to:e.marie.garrett@gmail.com'><img class='social-icons' src={Email}/></a>
					</div>
				</div>
				<div class='col s12 m12 l4 center'>
					<img class='mostly-human-developer' src={Gonthor}/>
					<br/>
					<p className='yellow-text text-darken-2'>Kyle Van Bergen</p>
					<p class='about-desc'>As a full-stack developer with robust experience as a technical consultant, Kyle's tendency toward purpose-driven work is deeply ingrained. Working in both large and small teams has allowed him to produce thoughtful, effective solutions through compromise and constructive collaboration.</p>
					<div class='col s12 center socials'>
						<a href='https://www.linkedin.com/in/kylevanbergen'><img class='social-icons' src={LinkedIn}/></a>
						<a href='http://www.github.com/kyleavb'><img class='social-icons' src={GitHub}/></a>
						<a href='mail-to:kyleavb@gmail.com'><img class='social-icons' src={Email}/></a>
					</div>
				</div>
			</div>
		</div>
		</div>
)