import React from 'react';
import Styled from 'styled-components';


function View(props){

   function handleClick(){
         console.log(`
            O nUmero de Parcelas: ${props.nparcelas}
            O valor da Garantia: ${props.vgarantia}
            O valor do Emprestimo: ${props.vemprestimo}
         `)
      }
   
   
   return (
      <Page>
         <div>
            <p> Parcelas: { props.nparcelas }</p>
            <p> Garantia: { props.vgarantia }</p>
            <p> Emprestimo: { props.vemprestimo }</p>
         </div>
         <button onClick={()=> handleClick()}>SOLICITAR</button>
      </Page>
   );
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