import React from 'react'
// styled
import { List } from '../styles/profiles'

const ProfileList: React.FC = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>
}

export default ProfileList
