import { Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import { GetSkillItem } from "../../../models/responses/skill/getSkillResponse";
import skillService from "../../../services/skillService";
import toastr from "toastr";
import ControlPopup from "../../Popup/ControlPopup";
import { AddProfileSkillRequest } from "../../../models/requests/skill/addProfileSkillRequest";
import { useAuthContext } from "../../../contexts/AuthContext";


type Props = {};
// const initialValues: GetSkillItem = {
//   id: 0,
//   name: "",
//};




const validationSchema = object({
  value: UserInformationValidationMessageRule.inputsRequired,
});

// const skillContext: any = useContext(SkillContext);

const SkillEdit = (props: Props) => {
  const [skills, setSkills] = useState<GetSkillItem[]>([]);
  const [postSkills, setPostSkills] = useState<AddProfileSkillRequest>(Object);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {userId} = useAuthContext();


  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const result = await skillService.getByFilter(0, 25);
        setSkills(result.data.items);
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchSkills();
  }, []);

  const initialValues: AddProfileSkillRequest = {
    userProfileId: Number(userId),
    skillId: Number(0)
  }

  const handleSkillSubmit = async (values: AddProfileSkillRequest) => {
    console.log("Seçilen beceri:", values);
    const result = await skillService.addProfilSkill(values);
    setPostSkills(result.data);
    console.log(result.data);
    toastr.success('Yetenek eklendi!');
  };

  

  return (
    <div className="container mt-5">
      <Formik initialValues={initialValues} onSubmit={handleSkillSubmit}>
        <Form>
          <label
            className="input-label-text"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Yetkinlik
          </label>
          <Field
            as="select"
            name="skillId"
            className="form-control my-custom-select"
          >
            <option value="" disabled selected>
              Seçiniz
            </option>
            {skills.map((skill) => (
              <option  key={skill.id} value={skill.id}>
                {skill.name}
              </option>
            ))}
          </Field>
          {/* {skillContext.setSkill} */}
          <button
            type="submit"
            className="button-save py-2 mb-3 mt-4 d-inline-block "
          >
            Kaydet
          </button>
        </Form>
      </Formik>

      {/* {selectedSkills.map((selectedSkill, index) => (
        <Card key={index} className="inline-card">
          <Card.Body className="inline-card-body">
            {selectedSkill.name}
            <button
              className="grade-delete g-del"
              onClick={() => {
                handleShow();
              }}
            >
              <i className="grade-delete-img"></i>
            </button>
            <ControlPopup
              title="Yeteneği silmek istediğinizden emin misiniz?"
              description="Daha sonra tekrardan listeden istediğiniz yetkinliği ekleyebilirsiniz."
              buttonYes={true}
              buttonNo={true}
              message="Yetenek silindi"
              show={show}
              hide={handleClose}
            />
          </Card.Body>
        </Card>
      ))} */}
    </div>
  );
};

export default SkillEdit;
