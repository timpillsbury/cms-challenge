import React from 'react';
import ReactDOM from 'react-dom';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Headline from "./Headline";


describe('<Headline />', function () {

	it('renders a headline component', () => {
	  const text = "Google Foo";
	  let component = mount(<Headline text={text} />);
	  expect(component.find("h1").text()).toEqual(text);
	});

});