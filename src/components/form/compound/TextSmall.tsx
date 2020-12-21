import React from 'react'
// styled
import { TextSmall } from '../styles/form'

const FormTextSmall: React.FC = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

export default FormTextSmall
