import React, { useContext } from 'react'
import { CardFeatureProps } from '../types/Types'
import { FeatureContext } from '../index'
import {
  Feature,
  Content,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Group,
  Maturity,
} from '../styles/card'

const CardFeature: React.FC<CardFeatureProps> = ({
  children,
  category,
  ...restProps
}) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  )

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={(): void => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null
}

export default CardFeature
