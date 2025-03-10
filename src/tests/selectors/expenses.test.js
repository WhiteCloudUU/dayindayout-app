import moment from 'moment'
import selectExpense from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

test("Should filter by text", () => {
    const filters = {
        text: 't',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filters);

    expect(result).toEqual([
        expenses[1], expenses[2]
    ])
})

test("Should sort by startDate", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpense(expenses, filters);

    expect(result).toEqual([
        expenses[2], expenses[0]
    ])
})

test("Should sort by endDate", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpense(expenses, filters);

    expect(result).toEqual([
        expenses[0], expenses[1]
    ])
})

test("Should sort by amount", () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filters);

    expect(result).toEqual([
        expenses[1], expenses[2], expenses[0]
    ])
})