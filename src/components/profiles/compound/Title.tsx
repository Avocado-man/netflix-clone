import React from 'react'
// styled
import { Title } from '../styles/profiles'

const ProfileTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}

export default ProfileTitle
