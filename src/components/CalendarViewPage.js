import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { setDate, setStartDate, setEndDate } from '../actions/filters'
import OptionsRangeFilter from './OptionsRangeFilter'
import Options from './Options'

export class CalendarViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment().startOf('week'),
            endDate: moment().endOf('week'),
            dates: []
        }

        for (let date = this.state.startDate.clone(); 
                date.isSameOrBefore(this.state.endDate); 
                    date.add(1, 'days')) {
            this.state.dates.push(date.clone());
        }

        // console.log(this.state.dates);

        props.dispatch(setDate(undefined));
        props.dispatch(setStartDate(this.state.startDate));
        props.dispatch(setEndDate(this.state.endDate));
    }

    render() {
        return (
            <div>
                <OptionsRangeFilter />
                {
                    this.state.dates.map((date, idx) => {
                        return (
                            <Options date={date} key={idx} />
                        )
                    })
                }
            </div>
        );
    }
};


export default connect()(CalendarViewPage);