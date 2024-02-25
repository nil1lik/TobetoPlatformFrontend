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
      const result = await userProfileService.getGraduationByUserId(Number(userId));
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
            <label className="grade-date">{shiftDate(graduation.startDate, 5).getFullYear()}-{shiftDate(graduation.endDate, 10).getFullYear()} - Devam Ediyor
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
