import React from 'react';
import ReactDOM from 'react-dom';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import App from './App';

it('renders without crashing', () => {
   let component = mount(<App />);
	expect(component.find(App).length).toEqual(1);
});
