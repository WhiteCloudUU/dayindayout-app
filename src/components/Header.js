import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export class Header extends React.Component {
    render() {
        return (
            <div className="container container--box">
                <h1 className="header__title">
                    DayInDayOut
                </h1>

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


