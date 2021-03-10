import React, { useState } from 'react'
import { HeaderSearchProps } from '../Types/Types'
import { Search, SearchIcon, SearchInput } from '../styles/header'

const HeaderSearch: React.FC<HeaderSearchProps> = ({
  searchTerm,
  setSearchTerm,
  ...restProps
}) => {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((prev) => !prev)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>): void =>
          setSearchTerm(target.value)
        }
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  )
}

export default HeaderSearch
