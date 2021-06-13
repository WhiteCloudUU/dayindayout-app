import React from 'react'
import { connect } from 'react-redux'
import Option from './Option'
import { selectOptionsByRange, selectOptionsByDate } from '../selectors/options'
import { startRemoveOption } from '../actions/options'

export class Options extends React.Component {
    onRemoveAll = () => {
        
        this.props.options.forEach((option) => {
            this.props.startRemoveOption(option.id);
        });
        
    }

    render() {
        
        return (
            <div className="container container--box">
                
                <div className="option-group__date">
                    {
                        this.props.date && this.props.date.format("dddd MMM Do")
                    }
                </div>

                <div className="option-group__header">
                    <h3> Options </h3>
                    <button  
                        className="button button--slot" 
                        onClick={this.onRemoveAll}
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
            
            
        )
    }
} 

const mapStateToProps = (state, props) => (
    {
        options: props.date ? 
            selectOptionsByRange(state.options, state.filters, props.date) :
            selectOptionsByDate(state.options, state.filters),

        filters: state.filters 
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        startRemoveOption: (option) => dispatch(startRemoveOption(option))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Options);