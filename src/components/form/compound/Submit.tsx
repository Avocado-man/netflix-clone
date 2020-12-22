import React from 'react'
// styled
import { Submit } from '../styles/form'
// Types
import { SubmitProps } from '../types/Types'

const FormSubmit: React.FC<SubmitProps> = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>
}

export default FormSubmit
