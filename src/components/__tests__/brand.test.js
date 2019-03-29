import React from 'react';
import { shallow } from 'enzyme';

import Brand from '../brand';

describe(Brand, () => {
    it('should render correctly', () => {
        expect(shallow(<Brand />)).toMatchSnapshot();
    });
    
    it('should render correctly with a child', () => {
        expect(shallow(<Brand>Foo</Brand>)).toMatchSnapshot();
    });
});
