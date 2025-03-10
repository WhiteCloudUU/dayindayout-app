import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'


test('should render ExpenseFrom correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseFrom correctly with provided expense', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });
  

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    
    wrapper.find('input').at(0).simulate('change', {
        target: { value: "Test description" }
    });
    
    expect(wrapper.state('description')).toBe("Test description");
});

test('should set note on textarea', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', {
        target: { value: "Test note" }
    });

    expect(wrapper.state('note')).toBe("Test note");
})

test('should set amount if valid input', () => {
    const value = "2.75";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
    const value = "2.755";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe("");
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        {
            description: expenses[0].description,
            amount: expenses[0].amount,
            createdAt: expenses[0].createdAt,
            note: expenses[0].note
        }
    );
    // expect(onSubmitSpy).toHaveBeenCalled();
})

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendarFocused on focus change', () => {
    
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
    expect(wrapper.state('calendarFocused')).toEqual(true);

})