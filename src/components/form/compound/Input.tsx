import React from 'react'
// styled
import { Input } from '../styles/form'
// Types
import { InputProps } from '../types/Types'

const FormInput: React.FC<InputProps> = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>
}

export default FormInput
