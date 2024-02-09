import React from "react";
import "../../pages/Evaluation/evaluation.css";
import { Col, Container, Row } from "react-bootstrap";
import ExamLink from "../../components/Evaluation/ExamLink";
import EvolationInformation from "../../components/Evaluation/EvolationInformation";
import { EvaluationPageBottomCardsHeader, EvaluationPageBottomLeftCardTexts, EvaluationPageBottomRightCardTexts, EvaluationPageExamLinkTexts, EvaluationPageHeader, EvaluationPageSuccessModelCardTexts, EvaluationPageTestCardTexts, startButtonText } from "../../utilities/Constants/constantValues";

type Props = {};

const Evaluation = (props: Props) => {
  return (
    <>
      <Container className="text-center py-5">
        <div className="mw-5xl mx-auto">
          <h3>
            <label className="text-secondary1">{EvaluationPageHeader.fragment1}</label>
            <label className="text-info1">{EvaluationPageHeader.fragment2}</label>
            <label className="text-info1">{EvaluationPageHeader.fragment3}</label>
            <label className="text-secondary1">{EvaluationPageHeader.fragment4}</label>
            <label className="text-info1">{EvaluationPageHeader.fragment5}</label>
            <label className="text-info1">{EvaluationPageHeader.fragment6}</label>
          </h3>
        </div>
      </Container>
      <Container className="mt-8">
        <Row className="justify-content-center align-items-center">
          <Col className="col-12 col-md-10 mb-8">
            <div className="dashboard-card">
              <label>{EvaluationPageSuccessModelCardTexts.headerText}</label>
              <p>
                {EvaluationPageSuccessModelCardTexts.fragment1}
                <b>{EvaluationPageSuccessModelCardTexts.fragment2}</b>
                {EvaluationPageSuccessModelCardTexts.fragment3}
                <b>{EvaluationPageSuccessModelCardTexts.fragment4}</b>
                {EvaluationPageSuccessModelCardTexts.fragment5}
                <b>{EvaluationPageSuccessModelCardTexts.fragment6}</b>
              </p>
              <a className="btn" href="#">
                {startButtonText}
              </a>
            </div>
          </Col>
          <Col className="col-12 col-md-5 mb-8 mt-5">
            <div className="dashboard-card1 equal-box">
              <label>{EvaluationPageTestCardTexts.headerText}</label>
              <p>
                {EvaluationPageTestCardTexts.fragment1}
                <b>{EvaluationPageTestCardTexts.fragment2}</b>
              </p>
              <label className="text-white">&#62;&#62;&#62;</label>
            </div>
          </Col>
          <Col className="col-12 col-md-5 mb-8 mt-5">
            <div className="d-flex flex-column equal-box" style={{ gap: 14 }}>
              <ExamLink title={EvaluationPageExamLinkTexts.title1}></ExamLink>
              <ExamLink title={EvaluationPageExamLinkTexts.title2}></ExamLink>
              <ExamLink title={EvaluationPageExamLinkTexts.title3}></ExamLink>
              <ExamLink title={EvaluationPageExamLinkTexts.title4}></ExamLink>
              <ExamLink title={EvaluationPageExamLinkTexts.title5}></ExamLink>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center py-5">
        <div className="position-relative">
          <div className="gradient-line3 mt-5"></div>
          <div className="mw-5xl mx-auto">
            <h3>
              <label className="text-secondary1"> {EvaluationPageBottomCardsHeader.fragment1}</label>
              &nbsp;
              <label className="text-info1"> {EvaluationPageBottomCardsHeader.fragment2}</label>
            </h3>
          </div>
        </div>
      </Container>
      <Container className="mt-2 mb-20">
        <Row className="justify-content-center align-items-center">
          <EvolationInformation 
            title={EvaluationPageBottomLeftCardTexts.header}
            description={EvaluationPageBottomLeftCardTexts.description}
          />
          <EvolationInformation
            title={EvaluationPageBottomRightCardTexts.header}
            italic={EvaluationPageBottomRightCardTexts.fragment1}
            description={EvaluationPageBottomRightCardTexts.fragment2}
            description2={EvaluationPageBottomRightCardTexts.fragment3}
            info={EvaluationPageBottomRightCardTexts.fragment4}
          />
        </Row>
      </Container>
    </>
  );
};

export default Evaluation;
