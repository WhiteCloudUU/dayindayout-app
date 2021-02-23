import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { setDate } from '../actions/filters'
import { SingleDatePicker } from 'react-dates'

export class OptionsDateFilters extends React.Component {
    state = {
        calendarFocused: false,
        date: moment()
    }

    onDateChange = (date) => {
        this.setState(() => ({ date }));
        this.props.setDate(date);
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    render() {
        return (
            <div className="container">
                <div>
                    <SingleDatePicker
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
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
        setDate: (date) => dispatch(setDate(date)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(OptionsDateFilters);