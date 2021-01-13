import React from 'react'
// types
import { PictureProps, UserProps } from './Types/Types'
// Compound
import {
  ProfilesList,
  ProfilesName,
  ProfilesPicture,
  ProfilesTitle,
  ProfilesUser,
} from './compound'
// Styled
import { Container } from './styles/profiles'

interface IProfilesComposition {
  Picture: React.FC<PictureProps>
  List: React.FC
  Name: React.FC
  Title: React.FC
  User: React.FC<UserProps>
}

const Profiles: React.FC & IProfilesComposition = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>
}

Profiles.Picture = ProfilesPicture
Profiles.List = ProfilesList
Profiles.Name = ProfilesName
Profiles.Title = ProfilesTitle
Profiles.User = ProfilesUser

export default Profiles
