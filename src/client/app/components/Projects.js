import React from 'react';
import Project from './project';

const Projects = () => (
	<div className="container">
    	<div className="projects" id="projects">
    	  	<h2> Front End Projects</h2>
    	  	<hr />
    	  	<div className="row">
    	  		<Project 
    	  			tagline="Play against computer at Simon"
    	  			tools="HTML, CSS, JavaScript, JQuery, Bootstrap"
    	  			title="Simon"
    	  			link="http://codepen.io/silverwedding/full/grRmEg/"
    	  			image="http://i.imgur.com/3amYuhO.png"
    	  		/>
    	  		<Project 
    	  			tagline="Pomodoro clock"
    	  			tools="HTML, CSS, JavaScript, JQuery, Bootstrap"
    	  			title="Pomodoro clock"
    	  			link="http://codepen.io/silverwedding/full/LNWGGY/"
    	  			image="http://i.imgur.com/k82khGR.png"
    	  		/>    
    	  	</div>
    	  	<hr />
    	  	<div className="row">
    	  		<Project 
    	  			tagline="Fully working calculator"
    	  			tools="HTML, CSS, JavaScript, JQuery, Bootstrap"
    	  			title="Calculator"
    	  			link="http://codepen.io/silverwedding/full/grwGda/"
    	  			image="http://i.imgur.com/7cV5NJl.png"
    	  		/>
    	  		<Project 
    	  			tagline="Play against computer at TicTacToe"
    	  			tools="HTML, CSS, JavaScript, JQuery, Bootstrap"
    	  			title="TicTacToe"
    	  			link="http://codepen.io/silverwedding/full/RapKJw/"
    	  			image="http://i.imgur.com/oF04nIL.png"
    	  		/>		    	         
    	  	</div>      
    	  	<hr />
    	  	<div className="row">
    	  		<Project 
    	  			tagline="Look up articles on Wikipedia"
    	  			tools="HTML, CSS, JavaScript, JQuery, Bootstrap, Wikipedia API"
    	  			title="Wikipedia Search"
    	  			link="http://codepen.io/silverwedding/full/grbqzd/"
    	  			image="http://i.imgur.com/nK2kVsb.png"
    	  		/>
    	    	<Project 
    	  			tagline="Check to see the local weather"
    	  			tools="HTML, CSS, JavaScript, JQuery, Bootstrap, Open Weather Map API"
    	  			title="Local Weather"
    	  			link="http://codepen.io/silverwedding/full/eZmBgp/"
    	  			image="http://i.imgur.com/CfADFX7.png"
    	  		/>	    	   		
    	  	</div>
    	  	<h2>Fullstack/Backend Projects</h2>
    	  	<hr />
    	  	<div className="row">
	    	  	<Project 
    	  			tagline="Create and Vote on polls"
    	  			tools="Jade, CSS, JavaScript, JQuery, Bootstrap, Node, Express, Passport, Mongoose"
    	  			title="Voting App"
    	  			link="http://shrouded-plateau-25461.herokuapp.com/"
    	  			image="http://i.imgur.com/gwpnCb1.png"
    	  		/>
	    	  	<Project 
    	  			tagline="Image Search API"
    	  			tools="Jade, CSS, JavaScript, Bootstrap, Node, Express, Mongoose, Bing API"
    	  			title="Image Search Abstraction Layer"
    	  			link="http://gentle-anchorage-99830.herokuapp.com/"
    	  			image="http://i.imgur.com/SeKw9t5.png"
    	  		/>
    	  	</div>
    	  	<div className="row">
	    	  	<Project 
    	  			tagline="Create Shortened URL"
    	  			tools="Jade, CSS, JavaScript, Bootstrap, Node, Express, Mongoose"
    	  			title="URL Shortener Microservice"
    	  			link="http://stark-garden-69362.herokuapp.com/"
    	  			image="http://i.imgur.com/LUGokig.png"
    	  		/>
    	  	</div> 
    	</div> 
    </div>   
);

export default Projects;