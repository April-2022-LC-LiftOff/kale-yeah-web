import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type="text" placeholder={props.placeholder} />
            <div className='searchIcon'>
                {/* <SearchIcon /> */}
            </div>
        </div>
        <div className='dataResult'></div>

      
    </div>
  )
}

export default SearchBar