import React from 'react';
import ReactDOM from 'react-dom';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import FullWidthImage from "./FullWidthImage";


describe('<FullWidthImage />', function () {

	it('renders a full width image component', () => {
	  const src = "//google.com/foo.png";
	  const alt = "Google Foo";
	  let component = mount(<FullWidthImage src={src} alt={alt} />);
	  expect(component.find("img").props().src).toEqual(src);
	  expect(component.find("img").props().alt).toEqual(alt);
	});	

});