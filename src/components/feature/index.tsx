import React from 'react'
// Compound
import { FeatureTitle, FeatureSubtitle } from './compound'
// Styled
import { Container } from './styles/feature'

interface IFeatureComposition {
  Title: React.FC
  Subtitle: React.FC
}

const Feature: React.FC & IFeatureComposition = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Container {...restProps}>{children}</Container>
}

Feature.Title = FeatureTitle
Feature.Subtitle = FeatureSubtitle

export default Feature
