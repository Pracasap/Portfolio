import { createStore, combineReducers } from 'redux';
import { Projects  } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects
        })
    );

    return store;
}