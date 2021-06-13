import React from 'react';
import moment from 'moment';
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
    // const optionTexts = this.props.options.map((option) => option.description.toLowerCase());
    const foundOption = this.props.options.find((option) => 
      option.description.toLowerCase() === optionText.toLowerCase()
    );     

    if (!optionText) {

      error = "Do something! YOLO!";

    } else if (foundOption) {

      error = `Dude! You haven't finished it yet since 
              ${moment(foundOption.createdAt).format("MM/DD/YYYY")}`;
      
    } else {
        this.props.startAddOption(
            {
                description: optionText,
                createdAt: this.props.filters.date.valueOf(),
                isCompleted: false
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

          <button className="button button--circle button--add">
            +
          </button>

        </form>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    options: state.options,
    filters: state.filters
  }
)


const mapDispatchToProps = (dispatch) => (
  {
      startAddOption: (option) => dispatch(startAddOption(option))
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(AddOption)
