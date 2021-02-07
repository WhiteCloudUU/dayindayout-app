import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import optionReducer from '../reducers/options'
import authReducer from '../reducers/auth'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers(
            {
                options: optionReducer,
                auth: authReducer
            }
        ),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}
