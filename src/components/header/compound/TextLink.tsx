import React from 'react'

import { Link } from '../styles/header'
import { HeaderTextLinkProps } from '../Types/Types'

const HeaderTextLink: React.FC<HeaderTextLinkProps> = ({
  children,
  ...restProps
}) => {
  return (
    <Link active="false" {...restProps}>
      {children}
    </Link>
  )
}

export default HeaderTextLink
