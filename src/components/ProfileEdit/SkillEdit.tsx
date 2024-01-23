import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import SkillService from "../../services/skillService";
import { getSkill } from "../../models/requests/skill/getSkill";

type Props = {};
const initialValues: getSkill = {
  id: 0, 
  name: ""
};

const SkillEdit = (props: Props) => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const skillService = new SkillService();
    skillService.
      getSkill()
      .then((result) => {
        if (result.data.items) {
          setSkills(result.data.items);
        } else {
          console.error("API'den beceri verileri alınamadı.");
        }
      })
      .catch((error) => {
        console.error("API isteği sırasında bir hata oluştu:", error);
      });
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values) 
        }}
      >
         <Form>
          <Field as="select" name="value" className="form-control">
            <option value="" disabled selected>
              Seçiniz
            </option>
            {skills.map((skill:any) => (
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
        
      <Card className="inline-card">
        <Card.Body className="inline-card-body">
          This is some text within a card body.
          <button className="grade-delete g-del">
            <i className="grade-delete-img"></i>
          </button>
        </Card.Body>
      </Card>
      <Card className="inline-card">
        <Card.Body className="inline-card-body">
          This is some text within a card body.
          <button className="grade-delete g-del">
            <i className="grade-delete-img"></i>
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SkillEdit;
