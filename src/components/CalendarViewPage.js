import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import OptionsRangeFilter from './OptionsRangeFilter'
import { setDate, setStartDate, setEndDate } from '../actions/filters'
import Options from './Options'

export class CalendarViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                startDate: moment().startOf('week'),
                endDate: moment().endOf('week'),
                date: undefined
        }
        console.log(this.state.startDate);
        props.dispatch(setDate(this.state.date));
        props.dispatch(setStartDate(this.state.startDate));
        props.dispatch(setEndDate(this.state.endDate));
    }

    render() {
        return (
            <div>
                This is calendar view page.
                <OptionsRangeFilter />
                
            </div>
        );
    }
};

export default connect()(CalendarViewPage);