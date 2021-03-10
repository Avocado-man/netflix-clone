import React from 'react'
import { Meta } from '../styles/card'

const CardMeta: React.FC = ({ children, ...restProps }) => {
  return <Meta {...restProps}>{children}</Meta>
}

export default CardMeta
