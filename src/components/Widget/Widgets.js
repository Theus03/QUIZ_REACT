import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #457b9d;
  background-color: #1d3557;
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3{
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: #BF0D3E;
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child{
    margin-top: 0;
  }
  & > *:last-child{
    margin-bottom:0;
  }
  ul{
    list-style: none;
    padding:0;
  }
`

Widget.QuizImg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #1d3557;
  * {
    margin: 0;
  }
`;
Widget.QuizPerg = styled.div`
  display: flex;
  padding: 18px 32px;
  justify-content: flex-start;
  align-items: center;
  background-color: #1d3557;
  * {
    margin: 0;
  }
`;
Widget.QuizRespBase = styled.div`
  display: block;
  padding: 15px 44px;
  align-items: center;
  background-color: #BF0D3E;
  * {
    margin: 0;
  }
`;
Widget.QuizResp = styled.div`
  cursor: pointer;
  color: #000;
  font-style: bold; 
  display: inline-block;
  margin: 2%;
  padding: 15px 20px;
  border-radius: 4px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  * {
    margin: 0;
  }
`;

export default Widget;