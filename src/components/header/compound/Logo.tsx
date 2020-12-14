import React from 'react'
// Router
import { Link as ReactRouterLink } from 'react-router-dom'
// Styled
import { Logo } from '../styles/header'
// Types
import { HeaderLogoProps } from '../Types/Types'

const HeaderLogo: React.FC<HeaderLogoProps> = ({
  to,
  alt,
  ...restProps
}): JSX.Element => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} alt={alt} />
    </ReactRouterLink>
  )
}

export default HeaderLogo
