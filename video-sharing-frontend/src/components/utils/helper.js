import React from "react";  
const {REACT_APP_API_SERVER} = process.env
export const getAllPosts = async ()=> {
    
    const data = await fetch(`${REACT_APP_API_SERVER}/api/video/getAllPosts`)
    .then(result => result.json())
    .catch(err => err.message);

    return data
}