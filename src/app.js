import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore'
import { addOption } from './actions/options'

// Tmp
import moment from 'moment'

const store = configStore();

store.subscribe(() => {
    console.log(store.getState());
});

const optionOne = store.dispatch(addOption(
    {
        description: "Reading",
        createdAt: moment().valueOf()
    }
));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));