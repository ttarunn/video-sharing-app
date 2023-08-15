import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  
  const [token, setToken] = useState('')
  useEffect(()=> {
    setToken(localStorage.getItem('token'))
  },[])


  const clearToken = ()=>{
    localStorage.setItem('token', '');
    setToken('')
  }
  return (
    <div>
        {!token?
            <div>
            <Link to={'/signin'} className='Link'>Login</Link> | <Link to={'/register'} className='Link'>Signup</Link>
        </div>:
        <div>
            <Link to={'/myvideos'} className='Link'>My Videos</Link> | <Link to={'/upload'} className='Link'>Upload</Link> | <Link to={'/'} className='Link' onClick={()=> clearToken()}>Sign Out</Link>
        </div>
        }      
    </div>
  )
}

export default Dashboard