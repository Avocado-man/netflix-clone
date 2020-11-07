import React from 'react'
// styled
import { Input } from '../styles/opt-form'
// Types
import { InputProps } from '../types/Types'

const OptFormInput: React.FC<InputProps> = ({ ...restProps }): JSX.Element => {
  return <Input {...restProps} />
}

export default OptFormInput
