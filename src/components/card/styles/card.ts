import styled from 'styled-components/macro'
import {
  FeatureStyledProps,
  FeatureTextStyledProps,
  GroupStyledProps,
  MaturityStyledProps,
} from '../types/Types'

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin: 0 56px;
`

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
    alignItems && `align-items: ${alignItems};`}
  ${({ margin }): string | undefined => margin && `margin: ${margin};`}
  
  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`
export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`
export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`
export const FeatureText = styled.p<FeatureTextStyledProps>`
  line-height: 22px;

  @media (min-width: 600px) {
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }): string =>
      fontWeight === 'bold' ? 'bold' : 'normal'};
    margin: 0;
  }
`

export const Feature = styled.div<FeatureStyledProps>`
  display: flex;
  flex-direction: row;
  background: url(${({ src }): string => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  ${Title} {
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  ${FeatureText} {
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
  }
`
export const FeatureTitle = styled(Title)`
  margin-left: 0;
`

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`
export const Maturity = styled.div<MaturityStyledProps>`
  background-color: ${({ rating }): string => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  width: 25px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`
export const Content = styled.div`
  margin: 30px;
  max-width: none;
  @media (min-width: 1000px) {
    margin: 56px;
    max-width: 500px;
    line-height: normal;
  }
`
export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`
export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 30px;

    @media (min-width: 1000px) {
      margin-left: 56px;
    }
  }
  &:last-of-type {
    margin-right: 30px;

    @media (min-width: 1000px) {
      margin-right: 56px;
    }
  }
`
export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`
