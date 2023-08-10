import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai'
const SignUp = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        profession:"",
        password:"",
        cpassword:"",
        file:""
    })
  return (
    <div className='sign-in-page'>
        <div className='left'>
            <img src='https://wallpapers.com/images/featured/guardians-of-the-galaxy-5paov6a8eku13ugb.jpg' alt='sign-in' className='left-img'/>
            <h1 className='sign-title'>FlickFlow</h1>
            <p className='sign-description'>Enjoy Multiple Videos at one Place</p>
            <Link to={'/signin'} className='signin-link'>Sign In</Link>
        </div>
        <div className='right'>
        <form className='center-signup' onSubmit={(e)=> {
            e.preventDefault();
            console.log(formData)
        }}>
            <h1>Register</h1>
            <p>Register to continue access pages</p>

            <label htmlFor="files" className="signup-img">{!formData.file?<AiOutlinePlusCircle color='gray'/>:<img src='https://d3ml3b6vywsj0z.cloudfront.net/company_images/605db35410fce904a7a8dcd5_images.png' alt='img' className='signup-img'/>}</label>
            <input id="files" type='file' accept="image/png, image/jpeg" onChange={(e)=> setFormData({
                ...formData,
                file:e.target.files[0].name
            })} required/>
            <input type='text' placeholder='Name' className='signup-name' onChange={(e)=> setFormData({
                ...formData,
                name:e.target.value
            })}
            required/>
            <input type='email' placeholder='Email' className='signup-email' onChange={(e)=> setFormData({
                ...formData,
                email:e.target.value
            })}
            required/>
            <input type='tel' placeholder='Phone' className='signup-email' onChange={(e)=> setFormData({
                ...formData,
                phone:e.target.value
            })}
            maxLength={10}
            required/>
            <input type='text' placeholder='Profession' className='signup-email' onChange={(e)=> setFormData({
                ...formData,
                profession:e.target.value
            })}
            required/>
            <input type='password' placeholder='Password' className='signup-email' onChange={(e)=> setFormData({
                ...formData,
                password:e.target.value
            })}
            required/>
            <input type='password' placeholder='Confirm Password' className='signup-email' onChange={(e)=> setFormData({
                ...formData,
                cpassword:e.target.value
            })}
            required/>
            <button className='signup-btn'>Register</button>
        </form>
        </div>
    </div>
  )
}

export default SignUp