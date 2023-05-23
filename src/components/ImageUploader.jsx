import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"


function ImageUploader(props) {
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [imageUrl,setImageUrl] = useState(null);

    const storage = getStorage(props.app);
    const ImagesReference = ref(storage, "images")

    

    const handleUpload = () => {
        if (selectedImageFile) {
            const fileReference = ref(ImagesReference, selectedImageFile.name);
            uploadBytes(fileReference, selectedImageFile)
            .then((snapshot) => {
                console.log("File uploaded successfully.")
                return getDownloadURL(fileReference)
            })
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                console.log("Error uploading file:", error)
            });
        } else {
            console.warn("No file selected");
        }
    };

 

    return (
        <div>
            <input onChange={handleImageFileSelect} type="file" />
            <button onClick={handleUpload}>Upload</button>
            {imageUrl && <img src={imageUrl}/>}
        </div>
    );
}

export default ImageUploader;