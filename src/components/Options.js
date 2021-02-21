import React from 'react'
import { connect } from 'react-redux'
import Option from './Option'
import { selectOptions } from '../selectors/options'

export class Options extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {
                        this.props.date && this.props.date.format("dddd MMM Do")
                    }
                </div>
                <div>
                    {
                        this.props.options.length === 0 ? (
                            <div>
                                <span> No options </span>
                            </div>
                        ) : (
                            this.props.options.map((option) => (
                                <Option {...option} key={option.id} />
                            ))
                        )
                    }
                </div>
        
            </div>
        )
    }
} 

const mapStateToProps = (state, props) => (
    {
        options: selectOptions(state.options, state.filters).filter((option) => {
            const dateMatch = props.date ? props.date.isSame(option.createdAt, 'day') : true;
            return dateMatch;
        })
    }
)

export default connect(mapStateToProps)(Options);