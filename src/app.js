import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore'
import { addOption } from './actions/options'

const store = configStore();

store.subscribe(() => {
    console.log(store.getState());
});

const optionOne = store.dispatch(addOption(
    {
        description: "Reading",
        createdAt: 0
    }
));



// const expenseTwo = store.dispatch(addExpense(
//     {
//         description: "Gas bill",
//         amount: 1000,
//         createdAt: 101
//     }
// ));

// const expenseThree = store.dispatch(addExpense(
//     {
//         description: "Rent",
//         amount: 130000,
//         createdAt: 102
//     }
// ));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));