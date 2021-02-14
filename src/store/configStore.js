import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import optionReducer from '../reducers/options'
import authReducer from '../reducers/auth'
import filterReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers(
            {
                options: optionReducer,
                filters: filterReducer,
                auth: authReducer
            }
        ),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}
