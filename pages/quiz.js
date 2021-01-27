import React from 'react';
import styled from 'styled-components';
import QuizBackground from '../src/components/QuizBackground/QuizBg';
import QuizContainer from '../src/components/QuizContainer/QuizContainer';
import Widget from '../src/components/Widget/Widgets';
import Img from '../src/components/QuizImg/QuizImg';

export const Logo = styled.img`
  width: 70px;
  margin: auto 10%;
`;

export const Emoji = styled.div`
  font-size: 10vw;
  text-align: center;
`;

export default function QuizPage() {
  return(
  <QuizBackground>
    <QuizContainer>
      <Widget> 
        <Widget.Header>
          <Logo src="https://www.mlbstatic.com/team-logos/league-on-dark/1.svg"/>
          <h1>MLB</h1>
        </Widget.Header>
        <Widget.QuizPerg>
          1. Quem foi o campeão da temporada de 2020 da Major League Baseball?
        </Widget.QuizPerg>
        <Widget.QuizImg>
          <Img src="https://images.unsplash.com/photo-1557422758-e50d123a39b7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"/>
        </Widget.QuizImg>
        <Widget.QuizRespBase>
          <Widget.QuizResp>A - LOS ANGELES DODGERS</Widget.QuizResp>
          <Widget.QuizResp>B - NEW YORK YANKEES</Widget.QuizResp>
          <Widget.QuizResp>C - ATLANTA BRAVES</Widget.QuizResp>
          <Widget.QuizResp>D - CLEVELAND INDIANS</Widget.QuizResp>
        </Widget.QuizRespBase>
      </Widget>       
    </QuizContainer>
  </QuizBackground>
)};