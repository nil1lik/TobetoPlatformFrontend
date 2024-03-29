import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import { GetSkillItem } from "../../../models/responses/skill/getSkillResponse";
import skillService from "../../../services/skillService";
import toastr from "toastr";
import ControlPopup from "../../Popup/ControlPopup";
import { AddProfileSkillRequest } from "../../../models/requests/skill/addProfileSkillRequest";
import { useAuthContext } from "../../../contexts/AuthContext";
import { ProfileSkillToastrMsg, saveButtonText } from "../../../utilities/Constants/constantValues";
import { GetSkillByUserId } from "../../../models/responses/userProfile/getSkillByUserId";
import userProfileService from "../../../services/userProfileService";


type Props = {};

const validationSchema = object({
  value: UserInformationValidationMessageRule.inputsRequired,
});

const SkillEdit = (props: Props) => {
  const [skills, setSkills] = useState<GetSkillItem[]>([]);
  const [skillUserProfile, setSkillUserProfile] = useState<GetSkillByUserId[]>([]);
  const [deleteSkills, setDeleteSkills] = useState(Number);
  const [selectSkillId, setSelectSkillId] = useState(Number);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {userId} = useAuthContext();

  const fetchSkills = async () => {
    try {
      const result = await skillService.getByFilter(0, 25);
      setSkills(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchSkillbyUserId = async () => {
    try {
      const result = await userProfileService.getSkillsByUserId(Number(userId))
      setSkillUserProfile(result.data.skillDtoItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const handleDeletedSkill = async (skillId:number) =>{
    try {
      const result = await skillService.deleteSkill(skillId)
      fetchSkillbyUserId()
      setShow(false)
    } catch (error) {
      console.error("Delete işlemi sırasında bir hata oluştu:", error);
    }
  }

  useEffect(() => {
    fetchSkills();
    fetchSkillbyUserId();
  }, []);

  const initialValues: AddProfileSkillRequest = {
    userProfileId: 0,
    skillId: 0
  }

  const handleSkillSubmit = async (values: AddProfileSkillRequest) => {
    values.userProfileId = Number(userId);
    values.skillId = selectSkillId
    const result = await skillService.addProfilSkill(values);
    toastr.success(ProfileSkillToastrMsg.skillAddSuccess);
    fetchSkillbyUserId();
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
          <select
                  onChange={(e) => setSelectSkillId(parseInt(e.target.value))}
                  className={`option form-control my-custom-select`}
                >
                  <option disabled selected>
                    {"Yetenek Seçiniz"}
                  </option>
                  {skills.map((element) => (
                    <option
                      key={element.id || String(element)}
                      value={element.id}
                      className="form-control my-custom-input"
                    >
                      {element.name || String(element)}
                    </option>
                  ))}
                </select>
          <button
            type="submit"
            className="button-save py-2 mb-3 mt-4 d-inline-block "
          >
            {saveButtonText}
          </button>
        </Form>
      </Formik>

      {skillUserProfile.map((skill:any) => (
        <Card className="inline-card">
          <Card.Body className="inline-card-body">
            {skill.skillName}
            <button
              className="grade-delete g-del"
              onClick={() => {
                setDeleteSkills(skill.id)
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
              delete={() => handleDeletedSkill(deleteSkills)}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SkillEdit;
