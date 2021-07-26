import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchProjects = () => dispatch => {

    dispatch(projectsLoading());

    return fetch(baseUrl + 'projects')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(projects => dispatch(addProjects(projects)))
        .catch(error => dispatch(projectsFailed(error.message)));
};

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = errMess => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errMess
})

export const addProjects = projects => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});


export const postMessage = message => () => {
    return fetch(baseUrl + 'message', {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                throw error;          
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => alert(`Your message has been sent.\n${JSON.stringify(response)}`))
    .catch(error => {
        console.log('post message', error.messsage)
        alert('Your message could not be posted\nError: ' + error.message);
    });
};