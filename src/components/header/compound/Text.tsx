import React from 'react'

import { Text } from '../styles/header'

const HeaderText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}

export default HeaderText
