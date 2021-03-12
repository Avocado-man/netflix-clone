import React, { createContext, useState } from 'react'

import { Container } from './styles/card'
// Types
import {
  CardFeatureProps,
  CardImageProps,
  CardItemProps,
  IFeatureContext,
} from './types/Types'
import {
  CardEntities,
  CardFeature,
  CardGroup,
  CardImage,
  CardItem,
  CardMeta,
  CardSubTitle,
  CardText,
  CardTitle,
} from './compound'

const contextDefaultValue = {
  showFeature: false,
  itemFeature: null,
  setShowFeature: (e: any): void => console.log(e),
  setItemFeature: (e: any): void => console.log(e),
}

interface ICardComposition {
  Entities: React.FC
  Group: React.FC
  Image: React.FC<CardImageProps>
  Item: React.FC<CardItemProps>
  Meta: React.FC
  SubTitle: React.FC
  Text: React.FC
  Title: React.FC
  Feature: React.FC<CardFeatureProps>
}

export const FeatureContext = createContext<IFeatureContext>(
  contextDefaultValue
)

const Card: React.FC & ICardComposition = ({ children, ...restProps }) => {
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

Card.Group = CardGroup
Card.Text = CardText
Card.SubTitle = CardSubTitle
Card.Title = CardTitle
Card.Entities = CardEntities
Card.Image = CardImage
Card.Item = CardItem
Card.Meta = CardMeta
Card.Feature = CardFeature

export default Card
