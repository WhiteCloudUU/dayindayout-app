import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { startAddOption } from '../actions/options'

export class AddOption extends React.Component {
  state = {
    error: undefined
  };

  onSubmit = (e) => {
    e.preventDefault();
    const optionText = e.target.elements.option.value.trim();

    let error = undefined;
    if (!optionText) {
        error = 'Enter valid value to add item';
    } else {
        this.props.startAddOption(
            {
                description: optionText,
                createdAt: this.props.filters.date.valueOf()
            }
        );
        e.target.elements.option.value = '';
    }

    this.setState(() => ({ error }));

  };

  render() {
    
    return (
      <div className="container container--box">
        
        {this.state.error && <p className="add-option__error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.onSubmit}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button button--circle button--add">+</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
)


const mapDispatchToProps = (dispatch) => (
  {
      startAddOption: (option) => dispatch(startAddOption(option))
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(AddOption)
