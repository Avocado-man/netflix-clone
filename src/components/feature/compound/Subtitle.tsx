import React from 'react'

import { Subtitle } from '../styles/feature'

const FeatureSubtitle: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

export default FeatureSubtitle
