import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('should set default expense state', () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
})

test('should remove expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE", 
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(
        [expenses[1], expenses[2]]
    );
})

test('should not remove expense by an invalid id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    }; 
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: 109,
            description: 'Laptop',
            note: "",
            createdAt: 20000,
            amount: 150000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
})

test('should edit expense by id and updates', () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: { note: 'Edited'}
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe('Edited');
}) 

test('should not edit expense by an invalid id', () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: -1,
        updates: { note: 'Edited'}
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe('');
})

test('should set expenses', () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: expenses
    };
    const state = expensesReducer([], action);
    expect(state).toEqual(expenses);
})