import { Dispatch, SetStateAction } from 'react'

export type CardItemProps = {
  item: any
}

export type CardFeatureProps = {
  category: string
}

export type CardImageProps = {
  src: string
}

export type FeatureStyledProps = {
  src: string
}

export type GroupStyledProps = {
  margin?: string
  flexDirection?: string
  alignItems?: string
}

export type MaturityStyledProps = {
  rating: number
}

export type FeatureTextStyledProps = {
  fontWeight?: string
}

export interface IFeatureContext {
  showFeature: boolean
  setShowFeature: Dispatch<SetStateAction<boolean>>
  itemFeature: any
  setItemFeature: Dispatch<SetStateAction<any>>
}
