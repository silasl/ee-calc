import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '../components/button';
import App, { Number } from '../App';

describe(App, () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('should render correctly', () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });

    it('should mount with the correct initial state', () => {
        const comp = shallow(<App />);
        expect(comp.state()).toEqual({ input: '' });
    });

    describe('State', () => {
        let comp;

        beforeEach(() => {
            comp = shallow(<App />);
        });

        it('should update the state as expected when a Number is clicked', () => {
            const btnClick = comp.find(Number).first().props().handleClick;
            btnClick('1');
            expect(comp.state()).toEqual({ input: '1' });
        });

        it('should concatenate the state input when Number is clicked', () => {
            comp.setState({ input: '1' });
            const btnClick = comp.find(Number).first().props().handleClick;
            btnClick('+');
            expect(comp.state()).toEqual({ input: '1+' });
        });

        it('should clear the state input when the clear button is clicked', () => {
            comp.setState({ input: 'foo' });
            comp.find(Button).first().props().handleClick();
            expect(comp.state()).toEqual({ input: '' });
        });

        it('should eval the input value and update the state when equals is clicked', () => {
            comp.setState({ input: '2+2' });
            comp.find(Number).last().props().handleClick();
            expect(comp.state()).toEqual({ input: '4' });
        });
    });
});