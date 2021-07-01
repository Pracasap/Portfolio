import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderProjects({project}) {
    return (
        <Card>
            {/* <Link to {`/project/${project.id}`}> */}
                <CardImg width="100%" src={project.image} alt={project.name} />
                <CardImgOverlay>
                    <CardTitle>{project.name}</CardTitle>
                </CardImgOverlay>
            {/* </Link> */}
        </Card>
    )
}

function Projects(props) {

    const project = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-5 m-2">
                <RenderProjects project={project} />
            </div>
        );
    });

    return (
        <div className="container-fluid projects">
            <div className="container mb-5">
                <div className="row">
                    <div className="col mt-5 mb-4">
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
