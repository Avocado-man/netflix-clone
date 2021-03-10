import React from 'react'
import { SubTitle } from '../styles/card'

const CardSubTitle: React.FC = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

export default CardSubTitle
