import React from 'react'
// styled
import { Name } from '../styles/profiles'

const ProfileName: React.FC = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>
}

export default ProfileName
