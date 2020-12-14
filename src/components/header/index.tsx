import React from 'react'
// Styled
import { Background } from './styles/header'
// Compound
import { HeaderButton, HeaderFrame, HeaderLogo } from './compound'
// Types
import { HeaderProps, HeaderLogoProps, HeaderButtonProps } from './Types/Types'

interface IHeaderComposition {
  Frame: React.FC
  Logo: React.FC<HeaderLogoProps>
  Button: React.FC<HeaderButtonProps>
}

const Header: React.FC<HeaderProps> & IHeaderComposition = ({
  bg = true,
  children,
  ...restProps
}): JSX.Element => {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <h1>header</h1>
  )
}

Header.Frame = HeaderFrame
Header.Logo = HeaderLogo
Header.Button = HeaderButton

export default Header
