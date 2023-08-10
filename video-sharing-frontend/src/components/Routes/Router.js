import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from '../SignIn';
import LandingPage from '../LandingPage';
import SignUp from '../SignUp';
import MyVideos from '../MyVideos';

const Router = ({children}) => {
  return <>
    <BrowserRouter>
        {children}
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/register' element={<SignUp/>}/>
            <Route path='/myvideos/:id' element={<MyVideos/>}/>
        </Routes>
    </BrowserRouter>
  </>
}

export default Router