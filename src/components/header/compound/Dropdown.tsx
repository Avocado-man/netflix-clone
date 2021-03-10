import React from 'react'
import { Dropdown } from '../styles/header'

const HeaderDropdown: React.FC = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

export default HeaderDropdown
