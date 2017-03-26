import React from "react";

const Project = (props) => (
    <div className="col-sm-6">
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title text-center">{props.title}</h3>
            </div>
            <div className="panel-body">
                <img
                    className="image-responsive thumbnail center-block"
                    src={props.image} />
                <p>{props.tagline}<br />{props.tools}</p>
            </div>
            <div className="panel-footer">
                <a
                    href={props.link}
                    target="_blank"
                    className="btn btn-primary center-block">
                    To Project
                </a>
            </div>
        </div>
    </div>
);

export default Project;