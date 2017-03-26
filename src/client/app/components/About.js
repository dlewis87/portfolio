import React from "react";
import { Link } from "react-router";

const About = () => (
    <div className="jumbotron" id="about">
        <h1>Danny Lewis</h1>
        <a href="https://github.com/silverwedding" target="_blank">
            <i className="fa fa-github-square fa-5x"></i>
        </a>
        <a href="http://codepen.io/silverwedding/" target="_blank">
            <i className="fa fa-codepen fa-5x"></i>
        </a>
        <a href="https://www.linkedin.com/in/danny-lewis-97881873" target="_blank">
            <i className="fa fa-linkedin fa-5x"></i>
        </a>
        <a href="mailto:me@dannylewis.uk" target="_blank">
            <i className="fa fa-envelope-o fa-5x" aria-hidden="true"></i>
        </a>
        <h2> Full Stack Web Developer</h2>
        <p>
            Experienced Full Stack Software Developer with a demonstrated history of working in the marketing,
            manufacturing and retail industries. Specialising in PHP, JavaScript, MySQL, React, CakePHP and Node.
        </p>
        <p>
            Commercial experience working with:
        </p>
        <ul className="skills">
            <li>Digital marketing screens</li>
            <li>Stock Control Software</li>
            <li>Website Development</li>
            <li>Web Applications</li>
            <li>Audio & Video Media Players</li>
            <li>Touch Screens</li>
            <li>APIs</li>
        </ul>

        <Link to="/projects">
            <p>
                Take a look at some of the projects i've been working on recently.
            </p>
        </Link>
    </div>
);

export default About;