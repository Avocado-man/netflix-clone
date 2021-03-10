import React from 'react'
// Styled
import { Background } from './styles/header'
// Compound
import {
  HeaderButton,
  HeaderFeature,
  HeaderFrame,
  HeaderLogo,
  HeaderText,
  HeaderFeatureCallOut,
  HeaderTextLink,
  HeaderGroup,
  HeaderPicture,
  HeaderProfile,
  HeaderDropdown,
  HeaderSearch,
  HeaderPlayButton,
} from './compound'
// Types
import {
  HeaderProps,
  HeaderLogoProps,
  HeaderButtonProps,
  HeaderPictureProps,
  HeaderTextLinkProps,
  HeaderSearchProps,
} from './Types/Types'

interface IHeaderComposition {
  Frame: React.FC
  Logo: React.FC<HeaderLogoProps>
  Button: React.FC<HeaderButtonProps>
  Feature: React.FC
  Text: React.FC
  FeatureCallOut: React.FC
  TextLink: React.FC<HeaderTextLinkProps>
  Group: React.FC
  Picture: React.FC<HeaderPictureProps>
  Profile: React.FC
  Dropdown: React.FC
  Search: React.FC<HeaderSearchProps>
  PlayButton: React.FC
}

const Header: React.FC<HeaderProps> & IHeaderComposition = ({
  bg = true,
  children,
  src,
  ...restProps
}): JSX.Element => {
  return bg ? (
    <Background src={src} {...restProps}>
      {children}
    </Background>
  ) : (
    (children as JSX.Element)
  )
}

Header.Frame = HeaderFrame
Header.Logo = HeaderLogo
Header.Button = HeaderButton
Header.Feature = HeaderFeature
Header.Text = HeaderText
Header.FeatureCallOut = HeaderFeatureCallOut
Header.TextLink = HeaderTextLink
Header.Group = HeaderGroup
Header.Picture = HeaderPicture
Header.Profile = HeaderProfile
Header.Dropdown = HeaderDropdown
Header.Search = HeaderSearch
Header.PlayButton = HeaderPlayButton

export default Header
