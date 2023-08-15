import React from 'react'
import Cards from './Cards'
import Header from './Header'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const searchResultVideo = useSelector(store => store.posts.searchResultVideo);
  return (
    <>
        <div className='search-page-container'>
            {searchResultVideo[0].map(item => <Link to={`myvideos/${item._id}`}><Cards card={item}/></Link>)}
        </div>
    </>
  )
}

export default SearchPage