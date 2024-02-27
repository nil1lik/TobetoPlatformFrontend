import React, { useEffect } from "react";
import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import XHRUpload from "@uppy/xhr-upload"; // XHRUpload eklentisi
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { useAuthContext } from "../../contexts/AuthContext";

type Props = {
  handleShow: boolean;
};

function UppyPopup(props: Props) {
  const { userId } = useAuthContext();

  useEffect(() => {
    if (props.handleShow) {
      handleShow();
    }
  }, [props.handleShow]);

  const uppy = new Uppy()
    .use(Dashboard, {
      showProgressDetails: true,
      proudlyDisplayPoweredByUppy: true,
    })
    .use(XHRUpload, {
      endpoint: "https://firebasestorage.googleapis.com/v0/b/tobetoplatformpair1.appspot.com/o", // Firebase Storage'un endpoint'i
      fieldName: "certificates",
      formData: true,
      headers: {
        // Gerekirse, ekstra başlık ekleyebilirsiniz
        Authorization: "Bearer AIzaSyA6Zpe7vtHzsiNZiUpUPj2RRZBAsErw7Lc", // Bu, Firebase Authentication kullanıyorsanız gerekebilir
      },
      timeout: 0,
    });

  uppy.on("complete", (result) => {
    if (result.failed.length === 0 && result.successful.length > 0) {
      console.log("Yükleme başarılı");
      const fileUrl = result.successful[0].uploadURL;
      console.log("Dosya URL'si:", fileUrl);
      // Firebase Storage'dan alınan dosya URL'si
    } else {
      console.warn("Yükleme başarısız oldu");
    }
  });

  const handleShow = () => {
    (uppy.getPlugin("Dashboard") as any).openModal();
  };

  return null;
}

export default UppyPopup;
