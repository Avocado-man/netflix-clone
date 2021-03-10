import React, { createContext, useState } from 'react'

import { Container } from './styles/card'

export const FeatureContext = createContext()

const Card: React.FC = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState({})
  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  )
}

export default Card
