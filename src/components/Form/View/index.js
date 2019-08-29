import React from 'react';
import Styled from 'styled-components';


function View(props){

   function handleClick(){
         console.log(`
            O tipo é ${props.type}
            O número de Parcelas: ${props.nparcelas}
            O valor da Garantia: ${props.vgarantia}
            O valor do Emprestimo: ${props.vemprestimo}
         `);
         alert('pedido solicitado!')
      }  
   
   
   return (
      <Page>
         <div className="view">
            <p>{ props.type }</p>
            <p> Parcelas: { props.nparcelas }</p>
            <p> Garantia: { props.vgarantia }</p>
            <p> Emprestimo: { props.vemprestimo }</p>
         </div>
         <button onClick={()=> handleClick()}>SOLICITAR</button>
      </Page>
   );
}


const Page = Styled.div`
   font-family: Arial;
   padding: 10px;
   margin-left: 400px;
   width: 400px;
   background: #DDD;
   border-radius: 4px;

   button{
      margin-left: 150px;
      padding: 10px;
      color: #000;
      background: #32ff7e;
      border-radius: 10px;
      cursor: pointer;
   }

   .view p{
      margin-left: 50px;
      padding: 5px;
   }
`;

export default View;