import React from 'react'
// styled
import { Link } from '../styles/form'
// Types
import { LinkProps } from '../types/Types'

const FormLink: React.FC<LinkProps> = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>
}

export default FormLink
