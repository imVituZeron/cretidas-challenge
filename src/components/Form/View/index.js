import React, { Component } from 'react';
import Styled from 'styled-components';


class View extends Component {
   render() {
      return (
         <Page>
            <div>
               coisa que vao aparacer ainda
            </div>
            <button>SOLICITAR</button>
         </Page>
      );
   }
}

const Page = Styled.div`
   background: #DDD;
   border-radius: 4px;

   button{
      padding: 10px;
      color: #000;
      background: #32ff7e;
      border-radius: 10px;
   }
`;

export default View;