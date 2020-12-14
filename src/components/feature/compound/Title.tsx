import React from 'react'
// styled
import { Title } from '../styles/feature'

const FeatureTitle: React.FC = ({ children, ...restProps }): JSX.Element => {
  return <Title {...restProps}>{children}</Title>
}

export default FeatureTitle
