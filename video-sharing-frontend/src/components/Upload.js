import React, { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { VscCloudUpload } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'


const Upload = () => {
    const navigate = useNavigate();
    const [videoUrl, setVideoUrl] = useState('')
    
    
    const {
      REACT_APP_CLOUDINARY_POST_API,
      REACT_APP_CLOUD_NAME,
    } = process.env;
    


    const cdnApi = async (files) => {
      setVideoUrl("");
      const data = new FormData();
      data.append("file", files);
      data.append("upload_preset", "video-sharing");
      data.append("cloud_name", "dxwzjsp7z");
  
      const cdnUpload = await fetch(
        "https://api.cloudinary.com/v1_1/dxwzjsp7z/video/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const cdnJSON = await cdnUpload.json();
      // console.log(cdnJSON.secure_url)
      setVideoUrl(cdnJSON);
      
    };
    // console.log(process.env.REACT_APP_CLOUD_NAME)
    
    console.log(REACT_APP_CLOUDINARY_POST_API)
  return (
    <div id='upload-container'>
        <div className='upload'>
            <MdCancel onClick={()=> navigate('/myvideos')} className='cancel'/>
            <h4>Upload New Video</h4>
            <label htmlFor='video'>
            <div className='browse-file'>
                <input type='file' id='video' onChange={(e)=> {cdnApi(e.target.files[0])}}/>
                <VscCloudUpload className='upload-icon'/>
                <p>Drag and drop to upload</p>
                <p>or browse to choose a file</p>
                
            </div>
            </label>
            <input type='text' placeholder='Name' className='upload-name'/>
            <textarea placeholder='Description'/>
            <div className='upload-select'>
            <div>
              <lable htmlFor="category" className='label'>Category</lable>
              <select id='category'>
              <option value={""}>Category</option>
                <option value={"action"} className='option'>Action</option>
                <option value={"drama"}>Drama</option>
                <option value={"romance"}>Romance</option>
                <option value={"comedy"}>Comedy</option>
              </select>
            </div>
            <div>
              <lable htmlFor="visibility" className='label'>Visibility</lable>
              <select id='visibility'>
              <option value={""}>Visibility</option>
                <option value={"public"}>Public</option>
                <option value={"private"}>Private</option>
              </select>
            </div>
            <div>
              <lable htmlFor="other" className='label'>Other</lable>
              <select id='other'>
              <option value={""}>Other</option>
              </select>
            </div>
            </div>
            <button className='my-video-btn btn-purple'>Save</button>
        </div>
        
    </div>
  )
}

export default Upload