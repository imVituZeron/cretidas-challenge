import React, { Component } from 'react';
import Styled from 'styled-components';


class Inputs extends Component {
   render() {
      return (
         <Page>
            <div class="container-first">
               <label for="nParcelas"> Número de Parcelas: 
                  <input type='text' id="nParcelas"/>
               </label>
               <label for="vGaratia"> Valor da Garantia: 
                  <input type='text' id="vGaratia"/>
               </label>
               <label for="vEmprestimo"> Valor da Empréstimo: 
                  <input type='text' id="vEmprestimo"/>
               </label>
            </div>
            <div class="container-second">
               lalal
            </div>
         </Page>
      );
   }
}

const Page = Styled.div`
   background: #FF0;
   border-radius: 5px;
`;

export default Inputs;