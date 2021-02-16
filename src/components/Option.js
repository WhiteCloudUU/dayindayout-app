import React from 'react'
import { connect } from 'react-redux'
import { removeOption } from '../actions/options'

export class Option extends React.Component {
    onCompleteOption = () => {
        
    }

    onDeleteOption = () => {
        this.props.dispatch(removeOption(this.props.id));
    }

    render() {
        return (
            <div>
                <button onClick={this.onCompleteOption}>Complete</button>
                <p>{this.props.description}</p>
                <button onClick={this.onDeleteOption}>Delete</button>
            </div>
        );
    }
}   

export default connect()(Option);