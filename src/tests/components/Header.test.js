import React from 'react'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
// import toJSON from 'enzyme-to-json' // Have set this up in jest.config.json
import { Header } from '../../components/Header'

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogout on button click', () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogoutSpy}/>);
    wrapper.find('button').simulate('click');
    
    expect(startLogoutSpy).toHaveBeenCalled();
})