import React from 'react'
import { connect } from 'react-redux'
import { removeOption, toggleOption } from '../actions/options'

export class Option extends React.Component {
    onCompleteOption = () => {
        // if(!e.target.parentElement.className) {
        //     e.target.parentElement.className = "option--completed";
        // } else {
        //     e.target.parentElement.className = "";
        // }
        this.props.dispatch(toggleOption(this.props.id));
        
    }

    onDeleteOption = () => {
        this.props.dispatch(removeOption(this.props.id));
    }

    render() {
        return (
            <div 
            className={this.props.isCompleted ? "option--completed" : ""}
            >
                {/* <button onClick={this.onCompleteOption}>Complete</button> */}
                <input type="checkbox" onChange={this.onCompleteOption}/>
                <p>{this.props.description}</p>
                <button onClick={this.onDeleteOption}>Delete</button>
            </div>
        );
    }
}   

export default connect()(Option);