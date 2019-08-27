import React from 'react';
import Form from './components/Form/index';
import Header from './components/Header/index';
import Styled from 'styled-components';

function App() {
  return (
    <Wrapper className="App">
      <Header />
      <Form />
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  background: #00b894;
  display: grid;
  grid-template-rows: 20vh 70vh
  grid-template-areas: "h"
                       "f";
                       
  Header{
    grid-area: h;
  }
  Form{
    grid-area: f;
  }
`;

export default App;
