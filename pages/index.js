import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget/Widgets';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import Footer from '../src/components/Footer/Footer';
import QuizBackground from '../src/components/QuizBackground/QuizBg';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import QuizContainer from '../src/components/QuizContainer/QuizContainer'
import Head from 'next/head';
import { useRouter } from 'next/router';



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
                <Input name="NomeDoUsuario" placeholder="Digite seu nome..." value={name} onChange = {(infosDoEvento) => setName(infosDoEvento.target.value)}/>
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