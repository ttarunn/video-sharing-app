import React from "react";  
const {REACT_APP_API_SERVER} = process.env
export const getAllPosts = async ()=> {
    
    const data = await fetch(`${REACT_APP_API_SERVER}/api/video/getAllPosts`)
    .then(result => result.json())
    .catch(err => err.message);

    return data
}


export const getAllMyPosts = async (headers)=> {
    
    const data = await fetch(`${REACT_APP_API_SERVER}/api/video/myvideos`,{ headers })
    .then(result => result.json())
    .catch(err => err);

    return data
};


// export const updatePost = async()=> {
//     const data = await fetch(`${REACT_APP_API_SERVER}/api/video/myvideos`,{ headers })
//     .then(result => result.json())
//     .catch(err => err);
// }

export const deletePost = async(id,token)=> {
    const data = await fetch(`${REACT_APP_API_SERVER}/api/video/delete/${id}`,{
        method:'delete',
        headers:{
            'Authorization':token
        }
    });
    return data.status
}