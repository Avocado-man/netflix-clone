import React from 'react'

import { Profile } from '../styles/header'

const HeaderProfile: React.FC = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>
}

export default HeaderProfile
