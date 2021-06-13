import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { setDate } from '../actions/filters'
import { SingleDatePicker } from 'react-dates'

export class OptionsDateFilters extends React.Component {
    constructor(props) {
        super(props);

        props.setDate(moment());

        this.state = {
            calendarFocused: false,
            date: moment()
        }
    }

    onDateChange = (date) => {
        this.setState(() => ({ date }));
        this.props.setDate(date);
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onBackwardClick = () => {
        const date = this.state.date.subtract(1, "days");
        this.setState(() => ({ date }));
        this.props.setDate(date);
    }

    onForwardClick = () => {
        const date = this.state.date.add(1, "days");
        this.setState(() => ({ date }));
        this.props.setDate(date);
    }

    render() {
        
        return (
            <div className="container">
                <div className="date-filter">
                    <button
                        onClick={this.onBackwardClick}
                        className="button button--circle button--add" 
                    >
                        {`<`}
                    </button>
                    
                    
                    <SingleDatePicker
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
            
                    <button
                        onClick={this.onForwardClick}
                        className="button button--circle button--add" 
                    >
                        {`>`}
                    </button>

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