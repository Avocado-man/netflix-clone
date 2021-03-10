import React from 'react'

import { Image } from '../styles/card'

const CardImage: React.FC = ({ ...restProps }) => {
  return <Image {...restProps} />
}

export default CardImage
