import React from 'react';
import { shallow } from 'enzyme';

import Button from '../button';

describe(Button, () => {
    const props = {
        handleClick: () => {},
        value: 'A',
    }

    it('should render correctly', () => {
        expect(shallow(<Button {...props} />)).toMatchSnapshot();
    });

    it('should render correctly with a label', () => {
        expect(shallow(<Button {...props} label="B" />)).toMatchSnapshot();
    });

    it('should render correctly with a className', () => {
        expect(shallow(<Button {...props} className="foo" />)).toMatchSnapshot();
    });
});
