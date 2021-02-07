import React from 'react'
import { Link } from 'react-router-dom'


const Option = ({ description }) => (
    <Link to="/">
        <div>
            <button>Remove</button>
            <p>{description}</p>
        </div>
    </Link>
        
)

export default Option;