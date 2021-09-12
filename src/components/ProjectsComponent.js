import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'

function RenderIcons(prop) {
    let weblinks = [];
    const webLinkKeys = ['website', 'github', 'codepen'];
    const {project} = prop
    
    webLinkKeys.map((linkKey) => {
        if (project[linkKey]) {
            const icon = linkKey === 'website' ? 'earth': `logo-${linkKey}`
            const link = <a href={prop.project[linkKey]} target="_blank" rel="noreferrer" style={{paddingRight: 10}}><ion-icon name={icon} /></a>;
            weblinks.push(link)
        }
    })
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
            <div className="container-fluid projects">
            <div className="container mb-5">
                <div className="row row-content" style={{minHeight: '70vh'}}>
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
                <div className="row row-content" style={{backgroundColor: '#f1f1f1', borderRadius: 2}}>
                        {projects}
                </div>
            </div>
        </div>
    );
}

export default Projects;
