import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
// import { Link } from 'react-router-dom';

function RenderProjects({project}) {
    return (
        <Card className="shadow">
            {/* <Link to {`/project/${project.id}`}> */}
            <div className="card-img-div"><img width="100%" src={project.image} alt={project.name} /></div>
            <CardBody>
            <CardTitle>{project.name}</CardTitle>
            <CardText>{project.description}</CardText>
            <div className="card-icon">
                <a href={project.website} target="_blank" rel="noreferrer"><ion-icon name="earth" /></a>&#8194;
                <a href={project.github} target="_blank" rel="noreferrer"><ion-icon name="logo-github" /></a>&#8194;
                <a href={project.codepen} target="_blank" rel="noreferrer"><ion-icon name="logo-codepen" /></a>&#8194;
            </div>
            </CardBody>
            {/* </Link> */}
        </Card>
    )
}

function Projects(props) {

    const project = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-6 p-3">
                <RenderProjects project={project} />
            </div>
        );
    });

    return (
        <div className="container-fluid projects">
            <div className="container mb-5">
                <div className="row">
                    <div className="col mt-5 mb-3">
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className="row row-content" style={{backgroundColor: '#f1f1f1'}}>
                        {project}
                </div>
            </div>
        </div>
    );
}

export default Projects;
