import styled from 'styled-components/macro'
import {
  FeatureStyledProps,
  FeatureTextStyledProps,
  GroupStyledProps,
  MaturityStyledProps,
} from '../types/Types'

export const Title = styled.p``

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    margin-left: 30px;

    @media (min-width: 1000px) {
      margin-left: 0;
    }
  }

  :last-of-type {
    margin-bottom: 0;
  }
`

export const Group = styled.div<GroupStyledProps>`
  display: flex;
  flex-direction: ${({ flexDirection }): string =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }): string | undefined =>
    alignItems && `align-items: ${alignItems}`}
  ${({ margin }): string | undefined => margin && `margin: ${margin}`}
  
  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`
export const SubTitle = styled.p``
export const Text = styled.p``
export const Feature = styled.div<FeatureStyledProps>``
export const FeatureTitle = styled(Title)``
export const FeatureText = styled.p<FeatureTextStyledProps>``
export const FeatureClose = styled.button``
export const Maturity = styled.div<MaturityStyledProps>``
export const Content = styled.div``
export const Meta = styled.div``
export const Entities = styled.div``
export const Item = styled.div``
export const Image = styled.img``
