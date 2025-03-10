import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ============================
// Action generators - expenses
// ============================

// ADD_EXPENSE
const addExpense = (
    {
        description = "",
        note = "",
        amount = "",
        createdAt = ""
    } = {}
) => (
    {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
)

// REMOVE_EXPENSE
const removeExpense = ({ id } ) => (
    {
        type: "REMOVE_EXPENSE",
        id
    }
)

// EDIT_EXPENSE
const editExpense = (id, updates) => (
    {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
)

// ===========================
// Action generators - filters
// ===========================

// SET_TEXT
const setTextFilter = (text = '') => (
    {
        type: "SET_TEXT_FILTER",
        text
    }
)

// SORT_BY_DATE
const sortByDate = () => (
    {
        type: "SORT_BY_DATE"
    }
)

// SORT_BY_DATE
const sortByAmount = () => (
    {
        type: "SORT_BY_AMOUNT"
    }
)

// SET_START_DATE
const setStartDate = (startDate) => (
    {
        type: "SET_START_DATE",
        startDate
    }
)

// SET_END_DATE
const setEndDate = (endDate) => (
    {
        type: "SET_END_DATE",
        endDate
    }
)

// =================
// Reducer - expense
// =================

const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ]
            
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => (id !== action.id));

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })

        default:
            return state;
    }
}

// =================
// Reducer - filters
// =================

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
    }
};

// ===================
// Selector - expenses
// ===================

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return textMatch && startDateMatch && endDateMatch;

    }).sort((a, b) => {
        if (sortBy == "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

// ============
// Store config
// ============

// combine reducers
const store = createStore(
    combineReducers(
        {
            expenses: expenseReducer,
            filters: filterReducer
        }
    )
);

// ========
// Dispatch
// ========

// dispatch action
const expenseTwo = store.dispatch(addExpense({ description: "rent", amount: 57500, createdAt: 200 }));
const expenseOne = store.dispatch(addExpense({ description: "coffee", amount: 325, createdAt: 500 }));


// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

store.dispatch(editExpense(expenseOne.expense.id, { amount: 475 }));

// store.dispatch(setTextFilter('r'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

store.dispatch(setEndDate(1000));
// store.dispatch(setEndDate());

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));
console.log(state);

