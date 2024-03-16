import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { Formik } from "formik";
import toastr from "toastr";
// import UppyPopup from "../../Uppy/UppyPopup";
import {
  ProfileSertificateListHeaders,
  uploadCertificateHeader,
} from "../../../utilities/Constants/constantValues";
import Image from "../../Uppy/image";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useProfileContext } from "../../../contexts/ProfileContext";
import userProfileService from "../../../services/userProfileService";

type Props = {};

const CertificateEdit = (props: Props) => {
  const { userDetails, addCertificatesToUserDetails } = useProfileContext();
  const { userId } = useAuthContext();

  const initialValues = {};

  useEffect(() => {
    const fetchData = async () => {
      if (!userDetails.certificatesDtoItems) {
        try {
          const certificatesResult =
            await userProfileService.getCertificatesByUserId(Number(userId));
          console.log(certificatesResult.data.certificateDtoItems);
          addCertificatesToUserDetails(
            certificatesResult.data.certificateDtoItems
          );
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [userDetails]);
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
                      <Image />
                    </label>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="table-responsive-sm">
              <table className="mt-8 corpTable table">
                <thead>
                  <tr>
                    <th>{ProfileSertificateListHeaders.fileName}</th>
                    <th className="text-center">
                      {ProfileSertificateListHeaders.fileType}
                    </th>
                    <th style={{ textAlign: "center" }}>
                      {ProfileSertificateListHeaders.process}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails.certificatesDtoItems &&
                    userDetails.certificatesDtoItems.map((certificate) => (
                      <>
                        <tr>
                          <td>{certificate.certificateName}</td>
                          <td>
                            <img
                              src={certificate.certificateFileUrl}
                              className="text-center"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                minWidth: "50px",
                                minHeight: "50px",
                                maxWidth: "50px",
                                maxHeight: "50px",
                              }}
                            />
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <button
                              type="button"
                              className="btn fileIcon"
                              onClick={() => {
                                toastr.info("Dosya indiriliyor");
                                window.open(certificate.certificateFileUrl, "_blank");
                              }}
                            >
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/fileIcon.svg"
                                }
                                alt="File Icon"
                                style={{ width: 50 }}
                              />
                            </button>
                            <button
                              type="button"
                              className=" btn trashIcon"
                              onClick={() => {}}
                            >
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/trashIcon.svg"
                                }
                                alt="Trash Icon"
                                style={{ width: 50 }}
                              />
                            </button>
                            {/* <ControlPopup
                        title="Seçilen sertifikayı silmek istediğinizden emin misiniz?"
                        description="Bu işlem geri alınmaz."
                        buttonYes={true}
                        buttonNo={true}
                        message="Dosya kaldırıldı"
                        show={show}
                        hide={handleClose}
                      /> */}
                          </td>
                        </tr>
                      </>
                    ))}
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
