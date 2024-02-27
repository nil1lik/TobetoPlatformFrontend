import React, { useState } from "react";
import { imageDb } from "../../utilities/Helpers/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuthContext } from "../../contexts/AuthContext";

type Props = {};

const Image = (props: Props) => {
  const [img, setImg] = useState<File | null>(null); 
  const { userId } = useAuthContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    if (img) {
      const imgRef = ref(imageDb, `${userId}/certificates/${img.name}`);
      uploadBytes(imgRef, img).then(async (snapshot) => {
        console.log("Uploaded a blob or file!", snapshot);
        const downloadURL = await getDownloadURL(imgRef); // Dosyanın indirme URL'sini al
        console.log("Download URL:", downloadURL); // URL'yi konsola yazdır
        // Burada downloadURL'yi başka bir yere gönderebilir veya kullanabilirsiniz
      }).catch((error) => {
        console.error("Error uploading file:", error);
      });
    } else {
      console.error("No file selected.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleClick}>Upload</button>
    </div>
  );
};

export default Image;
