import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Link = styled.a`
    display: block;
`;

const Img = styled.img`
    width: 150px;
    height: 40px;
`;

const Brand = ({ children }) => <Wrapper>
    <Link href="https://www.equalexperts.com/" target="_blank" title="EE homepage">
        <Img  alt="[=] Equal Experts" src={logo} />
    </Link>
    {children}
</Wrapper>;

Brand.propTypes = {
    children: PropTypes.node,
}

Brand.defaultProps = {
    children: undefined,
}

export default Brand;
