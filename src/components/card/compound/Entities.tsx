import React from 'react'

import { Entities } from '../styles/card'

const CardEntities: React.FC = ({ children, ...restProps }) => {
  return <Entities {...restProps}>{children}</Entities>
}

export default CardEntities
