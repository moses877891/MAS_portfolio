import React from 'react'

function ProjectCard(props) {
    const { project } = props;
    return (
        <div className="card shadow h-100">
            <img
                src={project.imageURL}
                alt="project1"
                className="card-img-top"
            />
            <h4 className="card-title">{project.title}</h4>
            <p className="card-text">{project.excerpt}</p>
            <a href="/" className="stretched-link">more</a>
        </div>
    )
}

export default ProjectCard;