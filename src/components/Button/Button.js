import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const Button = styled.button`
  margin: 6% auto;
  background-color: #dda15e;
  color: #000;
  outline: none;
  border-radius: 4px;
  border: none;
  color: #fff;
  font: bold 12pt sans-serif;
  width: 18vw;
  padding: 10px;
  cursor: pointer;
`;

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default Button;