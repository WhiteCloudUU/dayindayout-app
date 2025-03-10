import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters"
import moment from 'moment'

test("Should generate set startDate action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual(
        {
            type: "SET_START_DATE",
            startDate: moment(0)
        }
    )
})

test("Should generate set endDate action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual(
        {
            type: "SET_END_DATE",
            endDate: moment(0)
        }
    )
})

test("Should generate set sortByDate actioon object", () => {
    const action = sortByDate();
    expect(action).toEqual(
        {
            type: "SORT_BY_DATE",
        }
    )
})

test("Should generate set sortByAmount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual(
        {
            type: "SORT_BY_AMOUNT",
        }
    )
})

test("Should generate set text action object with provided value", () => {
    const action = setTextFilter("bill");
    expect(action).toEqual(
        {
            type: "SET_TEXT_FILTER",
            text: "bill"
        }
    )
})

test("Should generate set text action object without provided value", () => {
    const action = setTextFilter();
    expect(action).toEqual(
        {
            type: "SET_TEXT_FILTER",
            text: ""
        }
    )
})