import React from 'react';

function ProjectCard(props) {
    const { project } = props;
    return (
        <div className="card shadow h-100">
            <img
                src={project.imageUrl}
                alt="project1"
                className="card-img-top"
            />
            <h4 className="card-title">{project.title}</h4>
            <p className="card-text"><span className="text-info">About: </span>
                {project.excerpt}</p><br />
            <p className="card-text"><span className="text-danger">Tools: </span>
                {project.tools}</p>
            <a className="stretched-link" href={project.link} >Visit</a>
        </div>
    )
}

export default ProjectCard;