
import './App.css';
import styled from 'styled-components'
import { Title } from './components/Title';
import { Flex } from './components/Flex';
import { Console } from './components/Console';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
color: white;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color="red">Title</Title>
        <Console></Console>
      </Flex>
    </AppWrapper>
  );
}

export default App;
