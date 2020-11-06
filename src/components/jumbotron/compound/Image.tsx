import React from 'react'
// Styled
import { Image } from '../styles/jumbotron'
// Types
import { ImageProps } from '../types/Types'

export const JumbotronImage: React.FC<ImageProps> = ({
  ...restProps
}): JSX.Element => {
  return <Image {...restProps} />
}
