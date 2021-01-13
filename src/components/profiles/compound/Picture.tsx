import React from 'react'
// styled
import { Picture } from '../styles/profiles'
// Types
import { PictureProps } from '../Types/Types'

const ProfilePicture: React.FC<PictureProps> = ({ src, ...restProps }) => {
  return (
    <Picture
      src={src ? `images/users/${src}.png` : '/images/misc/loading.gif'}
      {...restProps}
    />
  )
}

export default ProfilePicture
