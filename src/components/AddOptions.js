import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { addOption } from '../actions/options'

export class AddOption extends React.Component {
  state = {
    error: undefined
  };

  onSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    let error = undefined;
    if (!option) {
        error = 'Enter valid value to add item';
    } else {
        this.props.dispatch(addOption(
            {
                description: option,
                createdAt: moment().valueOf()
            }
        ))
        e.target.elements.option.value = '';
    }

    this.setState(() => ({ error }));

  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddOption)
