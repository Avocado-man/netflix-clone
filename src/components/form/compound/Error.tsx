import React from 'react'
// styled
import { Error } from '../styles/form'

const FormError: React.FC = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>
}

export default FormError
