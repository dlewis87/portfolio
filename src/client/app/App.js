import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';

import './sass/style.scss'

import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const router = (
	<Router history={hashHistory}>
	    <Route path="/" component={Main}>
	    	<IndexRoute component={About} />
	        <Route path="about" component={About} />
	        <Route path="skills" component={Skills} />
	        <Route path="projects" component={Projects} />
	    </Route>
	</Router>
);

render(router, document.getElementById('app'));