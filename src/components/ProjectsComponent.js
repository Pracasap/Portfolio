import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

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

// function RenderIcons(prop) {
//     if (prop.project.website && prop.project.github) {
//         return (
//             <div>
//                 <a href={prop.project.website} target="_blank" rel="noreferrer"><ion-icon name="earth" /></a>&#8194;
//                 <a href={prop.project.github} target="_blank" rel="noreferrer"><ion-icon name="logo-github" /></a>
//             </div>
//         )
//     } else if (prop.project.website && !prop.project.github) {
//         return (
//             <div>
//                 <a href={prop.project.website} target="_blank" rel="noreferrer"><ion-icon name="earth" /></a>
//             </div>
//         )
//     } else if (!prop.project.website && prop.project.github) {
//         return (
//             <div>
//                 <a href={prop.project.github} target="_blank" rel="noreferrer"><ion-icon name="logo-github" /></a>
//             </div>
//         )
//     }
//     else {
//         return <div />
//     }
// }

function RenderProjects({project}) {

    return (
        <Card className="shadow">
            <div className="card-img-div">
                <a href={project.website} target="_blank" rel="noreferrer"><img width="100%" src={project.image} alt={project.name} /></a>
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
