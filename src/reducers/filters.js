import moment from 'moment'

const filterReducerDefaultState = {
    startDate: moment().startOf('week'),
    endDate: moment().endOf('week')
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

        default:
            return state;
    }
};