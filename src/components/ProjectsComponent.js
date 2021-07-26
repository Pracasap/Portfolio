import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'

function RenderIcons(prop) {
    let weblinks = [];
    if (prop.project.website) {
        const websiteLink = <a href={prop.project.website} target="_blank" rel="noreferrer"><ion-icon name="earth" /></a>;
        weblinks.push(websiteLink);
        weblinks.push(" ");
    }
    if (prop.project.github) {
        const githubLink = <a href={prop.project.github} target="_blank" rel="noreferrer"><ion-icon name="logo-github" /></a>;
        weblinks.push(githubLink);
        weblinks.push(" ");
    }
    if (prop.project.codepen) {
        const codepenLink = <a href={prop.project.codepen} target="_blank" rel="noreferrer"><ion-icon name="logo-codepen" /></a>;
        weblinks.push(codepenLink);
        weblinks.push(" ");
    }
    return weblinks;
}

const RenderProjects = ({project}) => {
    
    return (
        <Card className="shadow">
            <div className="card-img-div">
                <img width="100%" src={baseUrl + project.image} alt={project.name} />
            </div>
            <CardBody>
            <CardTitle>{project.name}</CardTitle>
            <CardText>{project.description}</CardText>
            <hr />
            <div className="card-icon">
            <RenderIcons project={project} />
            </div>
            </CardBody>
        </Card>
    )
}

function Projects(props) {
    
    const { projectsErrMess, projectsLoading } = props;
    const projects = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-6 p-3">
                <RenderProjects project={project} />
            </div>
        );
    });
    
    if (projectsLoading) {
        return (
            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row row-content p-5">
                            <Loading />
                    </div>
                </div>
            </div>
        );
    }
    if (projectsErrMess) {
        return <h4>{projectsErrMess}</h4>
    }
    return (
        <div className="container-fluid projects">
            <div className="container mb-5">
                <div className="row">
                    <div className="col mt-5 mb-3">
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className="row row-content" style={{backgroundColor: '#f1f1f1', borderRadius: 3}}>
                        {projects}
                </div>
            </div>
        </div>
    );
}

export default Projects;
