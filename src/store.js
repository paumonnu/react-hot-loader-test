import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form'
import {BASE_API_URL} from './env';
import * as axios from 'axios';

const apiAxiosClient = axios.create({
    baseURL: BASE_API_URL,
    responseType: 'json',
});

const axiosMiddlewareConfig = {
    returnRejectedPromiseOnError: true,
};

const formReducerEnhanced = formReducer.plugin({

});

const reducers = combineReducers({
    form: formReducerEnhanced,
});

const appLocalState = localStorage.getItem('appState') ? JSON.parse( localStorage.getItem('appState') ) : {};
const appSessionState = sessionStorage.getItem('appState') ? JSON.parse( sessionStorage.getItem('appState') ) : {};
const persistedState = {...appLocalState, ...appSessionState};

let middleware = applyMiddleware(
    thunk,
    axiosMiddleware(apiAxiosClient, axiosMiddlewareConfig),
);
middleware = composeWithDevTools(middleware);

const store = createStore(
    reducers,
    persistedState,
    middleware,
);

/* Subscribe state to local storage */
store.subscribe(()=>{
    localStorage.setItem('appState', JSON.stringify({
    }))
});

/* Subscribe state to session storage */
store.subscribe(()=>{
    sessionStorage.setItem('appState', JSON.stringify({

    }));
});

export default store;