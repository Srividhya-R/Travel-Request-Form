import React from 'react';
import { reduxForm } from 'redux-form';
import Travel from './form.component';
 export const FormContainer = () => {
  return (
    <Travel
    />
  );
}
const formConfiguration = {
  form: 'Mr.Cooper'
}
export default reduxForm(formConfiguration)(FormContainer);
