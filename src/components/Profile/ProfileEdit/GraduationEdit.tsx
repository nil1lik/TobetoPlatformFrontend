import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import FormikInput from "../../Formik/FormikInput";
import YearPicker from "../../../utilities/Helpers/YearPicker";
import graduationService from "../../../services/graduationService";
import { GraduationPageLabelTexts, ProfileGraduationListHeaders, registerButtonText } from "../../../utilities/Constants/constantValues";
import { GraduationDegreeValues } from "../../../utilities/Constants/GraduationDegreeValues";
import ControlPopup from "../../Popup/ControlPopup";
import { shiftDate } from "../../../utilities/Helpers/heatMap";
import { AddGraduationRequest } from "../../../models/requests/graduation/addGraduationRequest";
import { useAuthContext } from "../../../contexts/AuthContext";
import userProfileService from "../../../services/userProfileService";
import { GetGraduationByUserId } from "../../../models/responses/userProfile/getGraduationByUserId";
import toastr from "toastr";
type Props = {};

const GraduationEdit = (props: Props) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null >(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null >(new Date());
  const [isEndDateDisabled, setIsEndDateDisabled] = useState<boolean>(true);
  const [graduation, setGraduation] = useState<GetGraduationByUserId[]>([]);
  const [deletedGraduations, setDeletedGraduations] = useState(Number)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {userId} = useAuthContext();

  const fetchGraduation = async () => {
    try {
      const result = await userProfileService.getGraduationsByUserId(Number(userId));
      console.log(result.data.graduationsDtoItems)
      setGraduation(result.data.graduationsDtoItems);
    } catch (error) {
      console.log("Id ile kullanıcı alınırken hata oluştu.", error);
    }
  };

  const handleDeleteGraduation= async (graduationsId:number)=>{
    try {
      console.log(graduationsId)
      const result = await graduationService.delete(graduationsId)
      fetchGraduation()
      setShow(false)
    } catch (error) {
      console.error("Delete işlemi sırasında bir hata oluştu:", error);
    }
  }

  const handleStartDateChange = (date: Date | null) => {
    console.log(date)
    setSelectedStartDate(date);
    setIsEndDateDisabled(!date); 
  };

  useEffect(() => {
    fetchGraduation()
  }, []);

  const handleGraduationSubmit = async (values:AddGraduationRequest)=>{
    values.userProfileId = Number(userId);
    values.startDate = selectedStartDate;
    values.endDate = selectedEndDate;
    const result = await graduationService.add(values);
    toastr.success("Eğitim bilgisi eklendi");
    fetchGraduation();
  }
  
  const initialValues: AddGraduationRequest = {
    userProfileId: 0,
    degree: "",
    universityName: "",
    department: "",
    startDate: new Date(),
    endDate: new Date(),
    graduationDate: new Date(),
  };

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={handleGraduationSubmit}
      >
        <Form>
          <Container>
            <Row>
              <Col>
                <label
                  className="input-label-text"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  {GraduationPageLabelTexts.label1}
                </label>
                <Field
                  as="select"
                  name="degree"
                  className="custom-field form-select"
                >
                  <option value="" disabled hidden>
                  {GraduationPageLabelTexts.placeholder1}
                  </option>
                  {GraduationDegreeValues.map((item) => <option>{item}</option>)}
                </Field>
              </Col>
              <Col>
                <FormikInput
                  name="universityName"
                  label={GraduationPageLabelTexts.label2}
                  placeHolder={GraduationPageLabelTexts.placeholder2}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  name="department"
                  label={GraduationPageLabelTexts.label3}
                  placeHolder={GraduationPageLabelTexts.placeholder3}
                />
              </Col>
              <Col>
                <YearPicker
                  label={GraduationPageLabelTexts.label4}
                  name="startDate"
                  selected={selectedStartDate}
                  onYearChange={handleStartDateChange}
                  placeHolder={GraduationPageLabelTexts.placeholder4}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <YearPicker
                 label={GraduationPageLabelTexts.label5}
                 name="endDate"
                 selected={new Date()} 
                 onYearChange={(date) => setSelectedEndDate(date)} 
                 isDisabled={isEndDateDisabled}
                 placeHolder={GraduationPageLabelTexts.placeholder5}
                />
              </Col>
              <Col></Col>
            </Row>
            <br/>
            <button
              type="submit"
              className="button-save py-2 mb-3 mt-4 d-inline-block "
            >
              {registerButtonText}
            </button>
          </Container>
        </Form>
      </Formik>
      <Container>
        {graduation.map((graduation: any) => (
          <div className="my-grade">
          <div className="grade-header">
            
            <label className="grade-date">
            <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708981290/svg_xml_base64_PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9Im1hcmdpbi1yaWdodDogNHB4OyI_PHBhdGggZD0iTTMgOUgyMU03IDNWNU0x_in5z9d.svg"
                  style={{marginRight: "4px"}}
                >
                  <path
                    d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                    stroke="rgba(153, 51, 255, 0.66)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              {shiftDate(graduation.startDate, 5).getFullYear()}-{shiftDate(graduation.endDate, 10).getFullYear()}
</label>
            <label className="grade-degree">{graduation.degree}</label>
          </div>
          <div className="grade-details">
            <div className="grade-details-col">
              <label className="grade-details-header">{ProfileGraduationListHeaders.universityName}</label>
              <label className="grade-details-content">
              {graduation.universityName}
              </label>
            </div>
            <div className="grade-details-col">
              <label className="grade-details-header">{ProfileGraduationListHeaders.department}</label>
              <label className="grade-details-content">
              {graduation.department}
              </label>
            </div>
            <button className="grade-delete g-del" onClick={()=>{
              setDeletedGraduations(graduation.id);
              handleShow();
              }}>
              <i className="grade-delete-img"></i>
            </button>
            <ControlPopup
              title="Seçilen eğitimi silmek istediğinizden emin misiniz?"
              description="Bu işlem geri alınmaz."
              buttonYes={true}
              buttonNo={true}
              message="Eğitim kaldırıldı"
              show={show}
              hide={handleClose}
              delete={()=>handleDeleteGraduation(deletedGraduations)}
            />
          </div>
        </div>
        ))}
        
      </Container>
    </div>
  );
};

export default GraduationEdit;
