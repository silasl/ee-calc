import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 10px 0;
    background-color: #eee;
    padding: 5px;
    border: 1px solid #666;
    height: 100px;
    overflow-y: auto;
`;

const Screen = ({ value }) => <Wrapper>{value}</Wrapper>;

Screen.propTypes = {
    value: PropTypes.string,
}

Screen.defaultProps = {
    value: '',
}

export default Screen;
