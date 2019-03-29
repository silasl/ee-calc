import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
    display: block;
    background: #1795d4;
    border: 1px solid #eee;
    color: #eee;
    padding: 15px;
    text-align: center;
    vertical-align: middle;
    margin-bottom: 10px;
    cursor: pointer;
    min-width: 50px;

    &:hover {
        background: #fed800;
        color: #fff;
    }
`;

const Button = ({ className, handleClick, label, value }) =>
    <Wrapper className={className} onClick={() => handleClick(value)}>
        {label || value}
    </Wrapper>;

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
}

Button.defaultProps = {
    className: undefined,
    label: undefined,
}

export default Button;
