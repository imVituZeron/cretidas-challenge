import React, { Component } from 'react';
import Inputs from  './Inputs/index';
import View from './View/index';

import Styled from 'styled-components';


class Form extends Component {
   render() {
      return (
         <FormPage>
            <h1>formulario</h1>
            <Inputs />
            <View />
         </FormPage>
      );
   }
}

const FormPage = Styled.div`
`;
export default Form;