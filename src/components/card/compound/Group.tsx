import React from 'react'
import { Group } from '../styles/card'

const CardGroup: React.FC = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}

export default CardGroup
