import React from 'react'
import ProjectCard from './ProjectCard';
import { Consumer } from "../components/ConText";

function ProjectSection() {
    return (
        <Consumer>
            {(value) => {
                const { projects } = value;
                return (
                    <div className="container text-center py-3 my-2 ">
                        <h1 className="font-weight-light">
                            My <span className="text-danger">Projects</span>
                        </h1>
                        <div className="lead">
                            List of my projects
                        </div>
                        <div className="row my-5 pt-3">
                            {projects.map((i) => (
                                <div key={i.id} className="col-4 my-2 mb-3">
                                    <ProjectCard project={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }}
        </Consumer>
    );
}

export default ProjectSection;