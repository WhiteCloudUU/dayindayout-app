import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from "moment";
import { setDate, setStartDate, setEndDate } from '../actions/filters'

import { startLogout } from '../actions/auth'

export class Header extends React.Component {
    
    onHeaderClick = () => {
        const startDate = moment().startOf('week');
        const endDate = moment().endOf('week');
        const date = moment();

        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
        this.props.setDate(date);
    }

    render() {
        return (
            <div className="container container--box">
                <div className="header__title">
                    <button 
                        className="button-header"
                        onClick={this.onHeaderClick}
                    >
                        DayInDayOut
                    </button>
                </div>

                <div className="header__content">
                    <Link className="header__link" to="/">
                        Today
                    </Link>

                    <Link className="header__link" to="/calendar-view">
                        Calendar
                    </Link>
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        setDate: (date) => dispatch(setDate(date)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
)

export default connect(undefined, mapDispatchToProps)(Header)


