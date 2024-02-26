import React, { useEffect } from 'react'
import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Tus from "@uppy/tus";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
type Props = {
    handleShow: boolean;
};


function UppyPopup(props: Props) {
  
  useEffect(()=>{
    if (props.handleShow) {
      handleShow();
    }
  });

    const uppy = new Uppy();

    uppy
      .use(Dashboard, {
        showProgressDetails: true,
        proudlyDisplayPoweredByUppy: true,
      })
      
    uppy
      .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/", limit: 6 });

    uppy.on("complete", (result) => {
      if (result.failed.length === 0) {
        console.log("Upload successful");
      } else {
        console.warn("Upload failed");
      }
      console.log("successful files:", result.successful);
      console.log("failed files:", result.failed);
    });

    const handleShow = () =>{
      (uppy.getPlugin('Dashboard') as any).openModal();
    }
    return null;
}

export default UppyPopup;