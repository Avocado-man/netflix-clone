import React from 'react'
// styled
import { Base } from '../styles/form'
// Types
import { BaseProps } from '../types/Types'

const FormBase: React.FC<BaseProps> = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>
}

export default FormBase
