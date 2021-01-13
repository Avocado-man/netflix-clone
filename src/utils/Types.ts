interface ICollectionTypes {
  id: string
  title: string
  description: string
  genre: string
  maturity: string
  slug: string
}
export type SelectionFilterArg = {
  series: ICollectionTypes[]
  films: ICollectionTypes[]
}

export type FilteredObject = {
  title: string
  data: ICollectionTypes[]
}

export type SelectionReturnTypes = {
  series: FilteredObject[]
  films: FilteredObject[]
}
