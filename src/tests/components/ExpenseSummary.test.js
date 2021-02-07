import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('should render 1 expense summary', () => {
    const wrapper = shallow(<ExpenseSummary 
                                expensesCount={1} 
                                expensesTotal={475} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses summary', () => {
    const wrapper = shallow(<ExpenseSummary 
                                expensesCount={20} 
                                expensesTotal={10000} />);
    expect(wrapper).toMatchSnapshot();
});