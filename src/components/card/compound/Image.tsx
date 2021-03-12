import React from 'react'

import { Image } from '../styles/card'
import { CardImageProps } from '../types/Types'

const CardImage: React.FC<CardImageProps> = ({ ...restProps }) => {
  return <Image {...restProps} />
}

export default CardImage
