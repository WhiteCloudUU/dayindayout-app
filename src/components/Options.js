import React from 'react'
import { connect } from 'react-redux'
import Option from './Option'
import { selectOptionsByRange, selectOptionsByDate } from '../selectors/options'
import { removeAllOptions } from '../actions/options'

export class Options extends React.Component {
    onClearAll = () => {
        this.props.dispatch(removeAllOptions());
    }
    render() {
        return (
            <div className="container container--box">
                <div className="option-group">
                    <div className="option-group__date">
                        {
                            this.props.date && this.props.date.format("dddd MMM Do")
                        }
                    </div>

                    <div className="option-group__header">
                        <h3>Options</h3>
                        <button  
                            className="button button--slot" 
                            onClick={this.onClearAll}
                            disabled={this.props.options.length === 0}
                        >
                            X X X
                        </button>
                    </div>

                    <div>
                        {
                            this.props.options.length === 0 ? (
                                <div className="option-group__message">
                                    <span> 
                                        Working people! Working souls! 
                                    </span>
                                </div>
                            ) : (
                                this.props.options.map((option) => (
                                    <Option {...option} key={option.id} />
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
            
        )
    }
} 

const mapStateToProps = (state, props) => (
    {
        // options: selectOptions(state.options, state.filters).filter((option) => {
        //     const dateMatch = props.date ? props.date.isSame(option.createdAt, 'day') : true;
        //     return dateMatch;
        // })
        options: props.from === "ListViewPage" ? 
            selectOptionsByDate(state.options, state.filters) : // props.from === "ListViewPage"
            selectOptionsByRange(state.options, state.filters, props.date) // props.from === "CalendarViewPage"
    }
)

export default connect(mapStateToProps)(Options);