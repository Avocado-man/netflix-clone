import React from 'react'

import { Group } from '../styles/header'

const HeaderGroup: React.FC = ({ children, ...restProps }) => {
  return <Group>{children}</Group>
}

export default HeaderGroup
