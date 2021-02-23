import React from 'react'
import { connect } from 'react-redux'
import { removeOption, toggleOption } from '../actions/options'

export class Option extends React.Component {
    onCompleteOption = () => {
        this.props.dispatch(toggleOption(this.props.id));
        
    }

    onDeleteOption = () => {
        this.props.dispatch(removeOption(this.props.id));
    }

    render() {
        return (
            <div className="option">
                <div className="option__description">
                    <input type="checkbox" onChange={this.onCompleteOption}/>
                    <p className={this.props.isCompleted ? "option--completed" : ""}>{this.props.description}</p>
                </div>
                <button 
                    className="button button--circle button--remove" 
                    onClick={this.onDeleteOption}>
                    X
                </button>
            </div>
        );
    }
}   

export default connect()(Option);