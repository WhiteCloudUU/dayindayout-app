import React from 'react'
import { connect } from 'react-redux'
import { startRemoveOption, startToggleOption, toggleOption } from '../actions/options'

export class Option extends React.Component {
    onCompleteOption = () => {
        this.props.startToggleOption(this.props.id);
    }

    onDeleteOption = () => {
        
        this.props.startRemoveOption(this.props.id);
    }

    render() {
        return (
            <div className="option">
                <div className="option__description">
                        <input 
                            className="option__decription__checkbox" 
                            type="checkbox" 
                            onChange={this.onCompleteOption}
                        />
                        <p className={!this.props.isCompleted ? "" : "option__description--completed" }>
                            {this.props.description}
                        </p>
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

const mapDispatchToProps = (dispatch) => (
    {
        startRemoveOption: (option) => dispatch(startRemoveOption(option)),
        startToggleOption: (id) => dispatch(startToggleOption(id))
    }
);

export default connect(undefined, mapDispatchToProps)(Option);