import React, { useContext } from 'react'
import { Item } from '../styles/card'
import { FeatureContext } from '../index'
import { CardItemProps } from '../types/Types'

const CardItem: React.FC<CardItemProps> = ({
  item,
  children,
  ...restProps
}) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext)
  return (
    <Item
      onClick={(): void => {
        setItemFeature(item)
        setShowFeature(true)
      }}
      {...restProps}
    >
      {children}
    </Item>
  )
}

export default CardItem
