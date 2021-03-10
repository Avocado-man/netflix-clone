import React from 'react'

import { FeatureCallOut } from '../styles/header'

const HeaderFeatureCallOut: React.FC = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

export default HeaderFeatureCallOut
