import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configStore from './store/configStore'
import LoadingPage from './components/LoadingPage'
import database from './firebase/firebase'
import { startSetOptions } from './actions/options'

import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

// Tmp
import moment from 'moment'
import { addOption, setOptions } from './actions/options'

const store = configStore();

store.subscribe(() => {
    console.log(store.getState());
});

// const options = [
//     {
//         description: "Reading",
//         createdAt: moment().valueOf(),
//         isCompleted: false,
//         id: "Only for test..."
//     }
// ]

// const optionOne = store.dispatch(addOption(
//     {
//         description: "Reading",
//         createdAt: moment().valueOf(),
//         isCompleted: false,
//         id: "Only for test"
//     }
// ));

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

store.dispatch(startSetOptions())
    .then(() => {
        ReactDOM.render(jsx, document.getElementById('app'));
    })
