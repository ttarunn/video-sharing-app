import React from 'react'
import Cards from './Cards'
import Header from './Header'

const SearchPage = ({ search }) => {
  return (
    <>
        <Header/>
        <div className='search-page-container'>
            {search.map(item => <Cards/>)}
        </div>
    </>
  )
}

export default SearchPage