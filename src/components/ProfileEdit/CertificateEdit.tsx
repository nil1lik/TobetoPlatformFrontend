import React from "react";
import { Container, Form } from "react-bootstrap";
import { Formik } from "formik";

type Props = {};

const CertificateEdit = (props: Props) => {
  const initialValues = {};

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
            <label className="header-text">Sertifikalarım</label>
            <div className="row certificate">
              <div className="col-12 tobeto-light-bg ">
                <div className="upload-area">
                  <div className="cursor-pointer">
                    <label id="uploadArea" htmlFor="fileInput">
                      <img
                        className="upload-area-image"
                        src={process.env.PUBLIC_URL + "/images/upload-file.svg"}
                      />
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }} 
                    />
                  </div>

                  <label className="uploadText">Dosya Yükle</label>
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="table-responsive-sm">
              <div className="table-responsive-sm">
                <table className="mt-8 corpTable table table-hover">
                  <thead>
                    <tr>
                      <th>Dosya Adı</th>
                      <th className="text-center">Dosya Türü</th>
                      <th>Tarih</th>
                      <th style={{ textAlign: "center" }}>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nida Kul - Herkes İçin Kodlama - 1A.jpg</td>
                      <td className="png_icon text-center"></td>
                      <td>11.01.2024</td>
                      <td>
                        <button className=" btn fileIcon">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/fileIcon.svg"
                            }
                            style={{ width: 50 }}
                          />
                        </button>
                        <button className=" btn trashIcon">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/trashIcon.svg"
                            }
                            style={{ width: 50 }}
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </Form>
      </Formik>
    </div>
  );
};

export default CertificateEdit;
