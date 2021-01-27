import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const InputBase = styled.input`
    background-color: #1d3557;
    color: #fff;
    border: solid 2px #457b9d;
    outline: none;
    display: flex;
    width: 18vw;
    padding: 10px;
`;

export default function Input({ placeholder, onChange, ...props}){
    return(
        <div>
            <InputBase 
            placeholder={placeholder}
            onChange={onChange}
            {...props}
            />
        </div>
    )
}

Input.defaultProps = {
    value: '',
};

Input.PropTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequires,
};