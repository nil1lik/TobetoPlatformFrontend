import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import SkillService from "../../services/skillService";
import skillService from "../../services/skillService";
import {
  GetSkill,
  GetSkillItem,
} from "../../models/responses/skill/getSkillResponse";

type Props = {};
const initialValues: GetSkillItem = {
  id: 0,
  name: "",
};

const SkillEdit = (props: Props) => {
  const [skills, setSkills] = useState<GetSkillItem[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<GetSkillItem[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const result = await SkillService.getByFilter(0, 25);
          setSkills(result.data.items);
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchSkills();
  }, []);

  const handleSkillSubmit = (values: GetSkillItem) => {
    console.log("Seçilen beceri:", values);
    setSelectedSkills((prevSkills) => [...prevSkills, values]);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSkillSubmit}
      >
         <Form>
          <Field as="select" name="value" className="form-control my-custom-select">
            <option value="" disabled selected>
              Seçiniz
            </option>
            {skills.map((skill) => (
              <option key={skill.id} value={skill.name}>
                {skill.name}
              </option>
            ))}
          </Field>
          <button
            type="submit"
            className="button-save py-2 mb-3 mt-4 d-inline-block "
          >
            Kaydet
          </button>
        </Form>
      </Formik>

      {selectedSkills.map((selectedSkill, index) => (
        <Card key={index} className="inline-card">
          <Card.Body className="inline-card-body">
            {selectedSkill.name}
            <button className="grade-delete g-del">
              <i className="grade-delete-img"></i>
            </button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default SkillEdit;
