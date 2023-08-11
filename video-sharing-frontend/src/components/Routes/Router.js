import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from '../SignIn';
import LandingPage from '../LandingPage';
import SignUp from '../SignUp';
import MyVideos from '../MyVideos';
import Upload from '../Upload';
import VideoPlayer from '../VideoPlayer';

const Router = ({children}) => {
  return <>
    <BrowserRouter>
        {children}
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/register' element={<SignUp/>}/>
            <Route path='/myvideos/:id' element={<MyVideos/>}/>
            <Route path='/myvideos' element={<MyVideos/>}/>
            <Route path='/upload' element={<MyVideos/>}/>
            <Route path='/video/:id' element={<VideoPlayer/>}/>
        </Routes>
    </BrowserRouter>
  </>
}

export default Router