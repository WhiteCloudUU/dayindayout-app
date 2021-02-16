import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = () => (
    <header>
        <h1>DayInDayOut</h1>
        <Link to="/">Today</Link>
        <Link to="/calendar-view">Range</Link>
    </header>
);

