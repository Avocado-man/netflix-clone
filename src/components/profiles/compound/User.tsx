import React from 'react'
// styled
import { User } from '../styles/profiles'
// Types
import { UserProps } from '../Types/Types'

const ProfileUser: React.FC<UserProps> = ({ children, ...restProps }) => {
  return <User {...restProps}>{children}</User>
}

export default ProfileUser
