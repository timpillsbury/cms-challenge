import React from 'react';
import ReactDOM from 'react-dom';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import List from "./List";


describe('<List />', function () {

	it('renders a list component', () => {
	  const items = ["Google Foo", "Google Docs"];
	  let component = mount(<List items={items} />);
	  expect(component.find("ul").props().children.length).toEqual(2);
	});

});