import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1} = {}) => (
    {
        type: "INCREMENT",
        incrementBy
    }
)

const setCount = () => (
    {
        type: "RESET"
    }
)
const store = createStore((state = { count: 0 }, action) => {

    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }

})

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 100
})

store.dispatch(incrementCount({ incrementBy: 101 }));

store.dispatch(incrementCount());

store.dispatch(setCount());

store.dispatch({
    type: 'DECREMENT'
});

