import React from 'react'
// Compound
import {
  JumbotronContainer,
  JumbotronSubTitle,
  JumbotronPane,
  JumbotronImage,
  JumbotronTitle,
} from './compound'
// Types
import { InnerProps, ImageProps } from './types/Types'
// Styled
import { Item, Inner } from './styles/jumbotron'

export interface IJumbotronComposition {
  Container: React.FC
  Image: React.FC<ImageProps>
  Pane: React.FC
  SubTitle: React.FC
  Title: React.FC
}

const Jumbotron: React.FC<InnerProps> & IJumbotronComposition = ({
  children,
  direction = 'row',
  ...restProps
}): JSX.Element => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = JumbotronContainer
Jumbotron.Image = JumbotronImage
Jumbotron.Pane = JumbotronPane
Jumbotron.Title = JumbotronTitle
Jumbotron.SubTitle = JumbotronSubTitle

export default Jumbotron
