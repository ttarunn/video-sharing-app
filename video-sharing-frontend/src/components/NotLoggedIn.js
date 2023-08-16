import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const NotLoggedIn = () => {
  return (
    <div>
        <Header/>
        <div style={{ fontSize: "2rem", color: "White", textAlign: "center" }}>
        <h2>You are not Logged In</h2>
            <Link to={"/signin"} className="Link">
            <h4>Click to logIn</h4>
            </Link>
        </div>
    </div>
  )
}

export default NotLoggedIn