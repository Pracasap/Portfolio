import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Projects  } from './reducer';
import { InitialMessage } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects,
            ...createForms({
                messageForm: InitialMessage
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}