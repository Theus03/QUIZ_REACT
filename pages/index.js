import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget/Widgets';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import Footer from '../src/components/Footer/Footer';
import QuizBackground from '../src/components/QuizBackground/QuizBg';
import Head from 'next/head'
import {useRouter} from 'next/router'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export const Input = styled.input`
    background-color: #1d3557;
    color: #fff;
    border: solid 2px #457b9d;
    outline: none;
    display: flex;
    width: 18vw;
    padding: 10px;
`;

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

export const Logo = styled.img`
  width: 70px;
  margin: auto 10%;
`;
export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <Head>
        <title>Quiz_MLB</title>
      </Head>
      <QuizContainer>
        <Widget> 
            <Widget.Header>
                <Logo src="https://www.mlbstatic.com/team-logos/league-on-dark/1.svg"/>
                <h1>MLB</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function(infosDoEvento){
                infosDoEvento.preventDefault();           
                router.push(`/quiz?name=${name}`);
                console.log("Fazendo uma submissão por meio do react.")
              }}>
                <p>Todo os seu conhecimento sobre o universo da MLB, a maior e melhor liga de beisebol do Mundo!</p>
                <Input placeholder="Digite seu nome..." onChange={function (infosDoEvento){ 
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                  }}/>
                <Button type="submit" disabled={name.length === 0}>Jogar {name}</Button>
              </form>
            </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>Dê uma chance nesses quizes incríveis que o pessoal da Imersão React Next.js fizeram:</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Theus03"/>
    </QuizBackground>
  );
}
