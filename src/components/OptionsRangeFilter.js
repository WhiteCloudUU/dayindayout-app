import React from 'react'
import { connect } from 'react-redux'
import { setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class OptionsRangeFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() {
        return (
            <div className="container">
                <div className="react-date">
                    <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={false}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div> 
            
        )
    }
}

const mapStateToProps = (state) => (
    {
        filters: state.filters
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OptionsRangeFilters);