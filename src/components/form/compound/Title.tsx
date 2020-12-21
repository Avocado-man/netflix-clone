import React from 'react'
// styled
import { Title } from '../styles/form'

const FormTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}

export default FormTitle
