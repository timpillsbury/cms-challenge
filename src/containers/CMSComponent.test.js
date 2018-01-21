import React from 'react';
import ReactDOM from 'react-dom';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import CMSComponent from './CMSComponent';
import FullWidthImage from "../components/FullWidthImage";
import Headline from "../components/Headline";
import List from "../components/List";
import Button from "../components/Button";


describe('<CMSComponent />', function () {

	it('renders a full width image component', () => {
	  const src = "//google.com/foo.png";
	  const alt = "Google Foo";
	  let component = mount(<CMSComponent type="FullWidthImage" src={src} alt={alt} />);
	  expect(component.find(FullWidthImage).length).toEqual(1);
	});	

	it('renders a headline component', () => {
	  const text = "Google Foo";
	  let component = mount(<CMSComponent type="Headline" text={text} />);
	  expect(component.find(Headline).length).toEqual(1);
	});

	it('renders a list component', () => {
	  const items = ["Google Foo", "Google Docs"];
	  let component = mount(<CMSComponent type="List" items={items} />);
	  expect(component.find(List).length).toEqual(1);
	});


	it('renders a button component', () => {
	  const label = "Button";
	  let component = mount(<CMSComponent type="Button" label={label} />);
	  expect(component.find(Button).length).toEqual(1);
	});

});