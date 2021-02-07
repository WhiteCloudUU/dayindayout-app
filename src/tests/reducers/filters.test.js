import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('Should setup default filter reducer.', () => {
    const result = filterReducer(undefined, { type: "@@INIT" });
    expect(result).toEqual(
        {
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        }
    );
})

test('Should set sortBy to date', () => {
    const result = filterReducer(undefined, { type: "SORT_BY_DATE" });
    expect(result.sortBy).toBe('date');
})

test('Should set sortBy to amount', () => {
    const currentFilterState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = filterReducer(currentFilterState, { type: "SORT_BY_AMOUNT" });
    expect(result.sortBy).toBe('amount');
})

test('Should set text filter', () => {
    const result = filterReducer(undefined, { type: "SET_TEXT_FILTER", text: "bill" });
    expect(result.text).toBe("bill");
})

test('Should set startDate filter', () => {
    const result = filterReducer(undefined, { type: "SET_START_DATE",  startDate: moment(0) });
    expect(result.startDate).toEqual(moment(0));
})

test('Should set endDate filter', () => {
    const result = filterReducer(undefined, { type: "SET_END_DATE",  endDate: moment(0) });
    expect(result.endDate).toEqual(moment(0));
})