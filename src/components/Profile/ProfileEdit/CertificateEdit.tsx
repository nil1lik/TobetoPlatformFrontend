import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Formik } from "formik";
import toastr from "toastr"
import UppyPopup from "../../Uppy/UppyPopup";
import ControlPopup from "../../Popup/ControlPopup";
import { ProfileSertificateListHeaders, uploadCertificateHeader, uploadFileText } from "../../../utilities/Constants/constantValues";

type Props = {};

const CertificateEdit = (props: Props) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const initialValues = {};

  
  //Uppy Popup
  const [showUppy,setShowUppy] = useState<boolean>(false);

  const handleShowUppy = () => {
    setShowUppy(true);
  }

  useEffect(()=>{
    if (showUppy) {
      setShowUppy(false);
    }
  });
  //-------------------

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Container>
            <label className="header-text">{uploadCertificateHeader}</label>
            <div className="row certificate">
              <div className="col-12 tobeto-light-bg ">
                <div className="upload-area">
                  <div className="cursor-pointer">
                    <label htmlFor="fileInput">
                      <img
                        className="upload-area-image"
                        src={process.env.PUBLIC_URL + "/images/upload-file.svg"}
                        alt="Upload Area"
                        onClick={handleShowUppy}
                      />
                      <UppyPopup handleShow={showUppy}/>
                    </label>
                  </div>
                  
                  <label className="uploadText">{uploadFileText}</label>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="table-responsive-sm">
              <table className="mt-8 corpTable table">
                <thead>
                  <tr>
                    <th>{ProfileSertificateListHeaders.fileName}</th>
                    <th className="text-center">{ProfileSertificateListHeaders.fileType}</th>
                    <th>{ProfileSertificateListHeaders.date}</th>
                    <th style={{ textAlign: "center" }}>{ProfileSertificateListHeaders.process}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nida Kul - Herkes İçin Kodlama - 1A.jpg</td>
                    <td className="png_icon text-center"></td>
                    <td>11.01.2024</td>
                    <td>
                      <button type="button" className=" btn fileIcon" onClick={() => { toastr.info("Dosya indiriliyor") }}>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/fileIcon.svg"
                          }
                          alt="File Icon"
                          style={{ width: 50 }}
                        />
                      </button>
                      <button type="button" className=" btn trashIcon" onClick={() => { handleShow()}}>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/trashIcon.svg"
                          }
                          alt="Trash Icon"
                          style={{ width: 50 }}
                        />
                      </button>
                      <ControlPopup
                        title="Seçilen sertifikayı silmek istediğinizden emin misiniz?"
                        description="Bu işlem geri alınmaz."
                        buttonYes={true}
                        buttonNo={true}
                        message="Dosya kaldırıldı"
                        show={show}
                        hide={handleClose}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </Form>
      </Formik>
    </div>
  );
};

export default CertificateEdit;