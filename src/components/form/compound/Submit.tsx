import React from 'react'
// styled
import { Submit } from '../styles/form'

const FormSubmit: React.FC = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>
}

export default FormSubmit
