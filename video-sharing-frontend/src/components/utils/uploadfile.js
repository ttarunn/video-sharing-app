var cloudinary = require('cloudinary').v2;

console.log(process.env.test);


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET,

  });


async function uploadFiles() {
    try {
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_large(file, {
                resource_type: "video"
            },(error, result) => {
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
        console.log(result.secure_url)
    } catch (error) {
        console.log(error)
    }
}
