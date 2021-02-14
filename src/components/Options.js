import React from 'react'
import { connect } from 'react-redux'
import Option from './Option'
import selectOptions from '../selectors/options'

export const Options = (props) => (
    <div>

        <div>
            {
                props.options.length === 0 ? (
                    <div>
                        <span> No options </span>
                    </div>
                ) : (
                    props.options.map((option, idx) => (
                        <Option {...option} key={idx} />
                    ))
                )
            }
        </div>
        
    </div>
)

const mapStateToProps = (state) => (
    {
        options: selectOptions(state.options, state.filters)
    }
)

export default connect(mapStateToProps)(Options);