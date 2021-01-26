import React from 'react';
import styled from 'styled-components';

export const Back = styled.body`
  background-color:#1d3557;

  h1{
    margin: 8% auto;
    text-align: center;
    font: bold 50pt Segoe UI;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #000;
  }
`;
export const Emoji = styled.div`
  font-size: 10vw;
  text-align: center;
`;

export default function QuizPage(){
  return(
    <Back>
      <h1>
        Página em Desenvolvimento....
      </h1>
      <marquee hspace="30%"><Emoji>🔨💻⚾</Emoji></marquee>
    </Back>
  );
}