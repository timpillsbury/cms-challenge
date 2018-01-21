import React from 'react';
import ReactDOM from 'react-dom';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Button from "./Button";


describe('<Button />', function () {

	it('renders a button component', () => {
	  const label = "Button";
	  let component = mount(<Button label={label} />);
	  expect(component.find('button').text()).toEqual(label);
	});

	it('changes its label when clicked', () => {
	  const label = "Button";
	  let component = mount(<Button label={label} />);
	  component.find('button').simulate('click');
	  expect(component.find('button').text()).toEqual("");
	});

});