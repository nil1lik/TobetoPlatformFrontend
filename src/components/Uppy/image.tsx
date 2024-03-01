import React, { useState } from "react";
import { imageDb } from "../../utilities/Helpers/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuthContext } from "../../contexts/AuthContext";

type Props = {};

const Image = (props: Props) => {
  const [img, setImg] = useState<File | null>(null);
  const { userId } = useAuthContext();

  const [fileName, setFileName] = useState("Dosya Seç");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; // Seçilen dosya
    if (selectedFile) {
      setImg(selectedFile); // Dosyayı state'e ayarla
      setFileName(selectedFile.name); // Dosya adını state'e ayarla
    } else {
      setImg(null); // Dosyayı null olarak ayarla
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (img) {
      const imgRef = ref(imageDb, `${userId}/certificates/${img.name}`);
      uploadBytes(imgRef, img)
        .then(async (snapshot) => {
          console.log("Uploaded a blob or file!", snapshot);
          const downloadURL = await getDownloadURL(imgRef); // Dosyanın indirme URL'sini al
          console.log("Download URL:", downloadURL); // URL'yi konsola yazdır
          // Burada downloadURL'yi başka bir yere gönderebilir veya kullanabilirsiniz
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      console.error("No file selected.");
    }
  };

  return (
    <div className="uploader-cont">
      <div className="custom-file-upload">
        <label htmlFor="fileInput" className="custom-upload-btn"></label>
        <input
          id="fileInput"
          type="file"
          className="uploadInput"
          onChange={handleChange}
        />
        <p className="file-name">{fileName}</p>
      </div>
      {/* <input id="fileInput" type="file" onChange={handleChange} className="uploadInput"/> */}
      <button className="app-btn" onClick={handleClick}>Yükle</button>
    </div>
  );
};

export default Image;
