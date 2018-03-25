import React from 'react';
import Lemon from './img/lemon.jpg';
import Chilismaster from './img/chilismaster.jpg';
import Gonthor from './img/gonthor.jpg';
import LinkedIn from './img/linkedin.png';
import GitHub from './img/github.png';
import Email from './img/email.png';

export default () => (
	<div>
		<div className='row cyan darken-2'>
			<div className='col s12 m12 l8 offset-l2'>
				<h1 className='white-text about-us-title'>About Us</h1>
			</div>
		</div>
		<div className='row'>
			<div className='col s12 m12 l8 offset-l2'>
				<p className='about-body'>Hey, friend. As the developers behind this product, we are steadfastly passionate about promoting equality and inclusivity. 
				We all come from drastically different backgrounds, but very fortunately happened to take the same WDI course at the same time at
				General Assembly in Seattle, WA. Upon having the opportunity to work together as a team, we decided to put our skills and 
				our shared passion for using technology as a platform for positive, meaningful impact together to create this resourceful 
				web application. Taking the tumultuous and unreliable political climate nowadays into consideration, we wanted to create something 
				that would make existing as a marginalized member of the community feel a bit safer and make navigating the world as such a bit 
				less daunting. Please feel free to leave us feedback regarding this app--we know there's always room for improvement, whether that 
				is in regards to the construction of our site or the content itself.</p>
			</div>
		</div>
		<div className='row'>
			<div className='col s12 m12 l8 offset-l2'>
				<div className='col s12 m12 l4 center'>
					<img className='mostly-human-developer' src={Chilismaster} alt='img'/>
					<br/>
					<h5 className='yellow-text text-darken-2'>Daniel Heyward</h5>
					<p className='grey-text text-lighten-1'><em>He/Him</em></p>
					<p className='about-desc'>Dan's past life in marketing helped shape his perception of how we as a community think and interact with each other, and finds that true power comes from using our strengths to help those less fortunate. His goal is to apply his fullstack talents to bridge the gap between optimistic opportunity and impactful reality.</p>
					<div className='col s12 center socials'>
						<a href='http://www.github.com/danheyward'><img className='social-icons' src={GitHub} alt='img'/></a>
						<a href='https://www.linkedin.com/in/danheyward'><img className='social-icons' src={LinkedIn} alt='img'/></a>
						<a href='mail-to:danheyward@gmail.com'><img className='social-icons' src={Email} alt='img'/></a>
					</div>
				</div>
				<div className='col s12 m12 l4 center'>
					<img className='mostly-human-developer' src={Lemon} alt='img'/>
					<br/>
					<h5 className='yellow-text text-darken-2'>Emily "Lemon" Garrett</h5>
					<p className='grey-text text-lighten-1'><em>She/Her/They/Them</em></p>
					<p className='about-desc'>Lemon is passionate about taking the opportunity to utilize the endless resources that technology provides to help those in need. She deeply believes in using technology for more than just creating the slickest new product or game; she believes in employing it to promote inclusivity and create change.</p>
					<div className='col s12 center socials'>
						<a href='http://www.github.com/egarrett94'><img className='social-icons' src={GitHub} alt='img'/></a>
						<a href='https://www.linkedin.com/in/emilymariegarrett94'><img className='social-icons' src={LinkedIn} alt='img'/></a>
						<a href='mail-to:e.marie.garrett@gmail.com'><img className='social-icons' src={Email} alt='img'/></a>
					</div>
				</div>
				<div className='col s12 m12 l4 center'>
					<img className='mostly-human-developer' src={Gonthor} alt='img'/>
					<br/>
					<h5 className='yellow-text text-darken-2'>Kyle Van Bergen</h5>
					<p className='grey-text text-lighten-1'><em>He/Him</em></p>
					<p className='about-desc'>As a full-stack developer with robust experience as a technical consultant, Kyle's tendency toward purpose-driven work is deeply ingrained. Working in both large and small teams has allowed him to produce thoughtful, effective solutions through compromise and constructive collaboration.</p>
					<div className='col s12 center socials'>
						<a href='http://www.github.com/kyleavb'><img className='social-icons' src={GitHub} alt='img'/></a>
						<a href='https://www.linkedin.com/in/kylevanbergen'><img className='social-icons' src={LinkedIn} alt='img'/></a>
						<a href='mail-to:kyleavb@gmail.com'><img className='social-icons' src={Email} alt='img'/></a>
					</div>
				</div>
			</div>
		</div>
		</div>
)