import React from 'react'

import { Feature } from '../styles/header'

const HeaderFeature: React.FC = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>
}

export default HeaderFeature
