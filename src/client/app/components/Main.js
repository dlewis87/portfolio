import React from "react";
import { Link } from "react-router";

const Main = (props) => (
    <div className="container-fluid">
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/about">Danny Lewis</Link>
            </div>
            <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
        {props.children}
        <div className="footer">
            <div className="row">
                <div
                    className="col-sm-offset-4 col-sm-4 col-xs-10 col-xs-offset-1">
                    <div className="row">
                        <div className="col-xs-4">
                            <a href="https://github.com/silverwedding" target="_blank">
                                <i className="fa fa-github-square fa-3x"></i>
                            </a>
                        </div>
                        <div className="col-xs-4">
                            <a href="http://codepen.io/silverwedding/" target="_blank">
                                <i className="fa fa-codepen fa-3x"></i>
                            </a>
                        </div>
                    <div className="col-xs-4">
                        <a
                            href="https://www.linkedin.com/in/danny-lewis-97881873"
                            target="_blank">
                            <i className="fa fa-linkedin fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
);

export default Main;