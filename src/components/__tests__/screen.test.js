import React from 'react';
import { shallow } from 'enzyme';

import Screen from '../screen';

describe(Screen, () => {
    it('should render correctly', () => {
        expect(shallow(<Screen />)).toMatchSnapshot();
    });

    it('should render correctly with a value', () => {
        expect(shallow(<Screen value="Foo" />)).toMatchSnapshot();
    });
});
