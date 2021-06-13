import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import OptionsRangeFilter from './OptionsRangeFilter'
import Options from './Options'

export class CalendarViewPage extends React.Component {
    
    render() {
        // Feed in dates based on filter.startDate and filter.endDate
        // Have to use .clone() due to moment()'s pointer-like feature
        const dates = [];
        for (let date = this.props.filters.startDate.clone(); 
                date.isSameOrBefore(this.props.filters.endDate); 
                    date.add(1, 'days')) {
            dates.push(date.clone());
        }
        
        return (
            <div>
                <OptionsRangeFilter />
                {
                    dates.map((date, idx) => {
                        return (
                            <Options date={date} key={idx} />
                        )
                    })
                }
            </div>
        );
    }
};

const mapStateToProps = (state) => (
    {
        filters: state.filters
    }
);


export default connect(mapStateToProps)(CalendarViewPage);