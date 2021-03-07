import React from 'react'
import ProjectCard from './ProjectCard';
import { Consumer } from "../components/ConText";

function ProjectSection() {
    return (
        <Consumer>
            {(value) => {
                const { projects } = value;
                return (
                    <div className="container text-center py-5">
                        <h1 className="font-weight-light">
                            My <span className="text-danger">Friends</span>
                        </h1>
                        <div className="lead">
                            List of my friends
                        </div>
                        <div className="row my-5 pt-3">
                            {projects.map((i) => (
                                <div key={i.id} className="col-12 col-md-4 my-2 mb-3">
                                    <ProjectCard project={i} />
                                </div>
                            ))}
                        </div>
                        <div className="my-5" id="my1">
                            <a href="/" className="text-dark text-right">
                                <h5>
                                    See all friends<i
                                        className="fas fa-angle-double-right align-middle"
                                    ></i>
                                </h5>
                            </a>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    );
}

export default ProjectSection;