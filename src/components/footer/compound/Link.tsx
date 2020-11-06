import React from 'react'
// Styled
import { Link } from '../styles/footer'
// Types
import { LinkProps } from '../types/Types'

const FooterLink: React.FC<LinkProps> = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Link {...restProps}>{children}</Link>
}

export default FooterLink
