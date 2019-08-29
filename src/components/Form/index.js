import React, { Component } from 'react';
import View from './View/index';

import Styled from 'styled-components';


class Form extends Component {
   constructor(props){
      super(props);
      this.state = {
         nParcelas: 0,
         vGarantia: 0,
         vEmprestimo: 0
      }
   }

   handleChangeGarantia = event => {
      this.setState({
         vGarantia: event.target.value,
      });
   }

   handleChangeEmprestimo = event => {
      this.setState({
         vEmprestimo: event.target.value,
      });
   }

   handleChangeParcelas= event => {
      this.setState({
         nParcelas: event.target.value,
      });
   }

   render() {
      return (
         <FormPage>
            <h1>formulario</h1>
            <div class="container-first">
               <label for="nParcelas"> Número de Parcelas: 
                  <input type='text' id="nParcelas" value={this.state.nParcelas}
                     onChange={this.handleChangeParcelas}
                  />
               </label>
               <label for="vGaratia"> Valor da Garantia: 
                  <input type='text' id="vGaratia" value={this.state.vGarantia}  
                     onChange={this.handleChangeGarantia}
                  />
               </label>
               <label for="vEmprestimo"> Valor da Empréstimo: 
                  <input type='text' id="vEmprestimo" value={this.state.vEmprestimo}
                     onChange={this.handleChangeEmprestimo}
                  />
               </label>
            </div>
            <div class="container-second">
               <select name='select'>
                  <option value="Veiculo">Veiculo</option>
                  <option value="Imóvel">Imóvel</option>
               </select>
               <input type='range' min='12000' max='24000'/>
               <input type='range' min='30000' max='60000'/>
            </div>
            <View 
               nparcelas={this.state.nParcelas}
               vgarantia={this.state.vGarantia}
               vemprestimo={this.state.vEmprestimo}
            />
         </FormPage>
      );
   }
}

const FormPage = Styled.div`
`;
export default Form;