import React from 'react'
// styled
import { Item } from '../styles/profiles'
// Types
import { UserProps } from '../Types/Types'

const ProfileUser: React.FC<UserProps> = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>
}

export default ProfileUser
