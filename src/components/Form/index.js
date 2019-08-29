import React, { Component } from 'react';
import View from './View/index';

import Styled from 'styled-components';


class Form extends Component {
   constructor(props){
      super(props);
      this.state = {
         type: '',
         nParcelas: 0,
         vGarantia: 0,
         vEmprestimo: 0
      }
   }
   handlechangeType = event => {
      this.setState({
         type: event.currentTarget.value,
      })
      console.log(this.state.type);
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
               <div class="container-second">
                  <h1>Compras</h1>
                  <label> 
                     <select  onChange={this.handlechangeType} class='select' name='select'>
                        <option value="Veiculo">Veiculo</option>
                        <option value="Imóvel">Imóvel</option>
                     </select>
                  </label>
               </div>
               <label for="nParcelas">Parcelas: 
                  <input type='text' id="nParcelas" 
                     onChange={this.handleChangeParcelas}
                     placeholder=""
                  />
               </label>
               <label for="vGaratia">Garantia: 
                  <input type='text' id="vGaratia"   
                     onChange={this.handleChangeGarantia}
                     placeholder="12000 a 24000"
                  />
               </label>
               <label for="vEmprestimo">Empréstimo: 
                  <input type='text' id="vEmprestimo" 
                     onChange={this.handleChangeEmprestimo}
                     placeholder="30000 a 60000"
                  />
               </label>
            </div>
            <View
               type={this.state.type}
               nparcelas={this.state.nParcelas}
               vgarantia={this.state.vGarantia}
               vemprestimo={this.state.vEmprestimo}
            />
         </FormPage>
      );
   }
}

const FormPage = Styled.div`
   font-family: Arial;

   div.container-first{
      margin-left: 400px;
      background: #0984e3;
      padding: 10px;
      border-radius: 5px;
      width: 200px;
      label{
         
      }
      input{
         padding: 5px;
      }
   }
   div.container-second{
      width: 370px;

      .select{
         width: 200px;
         option{
            padding: 5px;
         }
      }
   }
`;
export default Form;