import React from 'react'

import { Picture } from '../styles/header'
import { HeaderPictureProps } from '../Types/Types'

const HeaderPicture: React.FC<HeaderPictureProps> = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

export default HeaderPicture
