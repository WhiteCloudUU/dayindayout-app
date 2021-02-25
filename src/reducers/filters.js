import moment from 'moment'

const filterReducerDefaultState = {
    startDate: moment().startOf('week'),
    endDate: moment().endOf('week'),
    date: moment()
};
export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {

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
        
        case 'SET_DATE':
            return {
                ...state,
                date: action.date
            }

        default:
            return state;
    }
};