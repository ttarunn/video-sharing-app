import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../App'

const Dashboard = () => {
  const { login, setLogin } = useContext(authContext)
  
  return (
    <div>
        {!login?
            <div>
            <Link to={'/signin'} className='Link'>Login</Link> | <Link to={'/register'} className='Link'>Signup</Link>
        </div>:
        <div>
            <Link to={'/myvideos/0'} className='Link'>My Videos</Link> | <Link to={'/upload'} className='Link'>Upload</Link> | <Link to={'/'} className='Link' onClick={()=> setLogin(false)}>Sign Out</Link>
        </div>
        }      
    </div>
  )
}

export default Dashboard