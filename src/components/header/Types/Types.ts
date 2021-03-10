import { Dispatch, SetStateAction } from 'react'

export type HeaderProps = {
  bg?: boolean
  src?: string
  dontShowOnSmallViewPort?: boolean
}

export type HeaderPictureProps = {
  src: string
}

export type HeaderLogoProps = {
  to: string
  alt: string
  src: string
}

export type HeaderButtonProps = {
  to: string
}

export type HeaderBackgroundProps = {
  src?: string
  dontShowOnSmallViewPort?: boolean
}

export type HeaderTextLinkProps = {
  active?: string
  onClick?: () => void
}

export type HeaderSearchProps = {
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}

export type HeaderSearchInputProps = {
  active: boolean
}
