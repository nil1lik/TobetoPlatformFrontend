import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import toastr from "toastr"

type Props = {
    title: string;
    description: string;
    buttonYes?: boolean;
    buttonNo?: boolean;
    message: string;
    show: boolean;
    hide: () => void
};

const ControlPopup = (props: Props) => {
    const handleNoButtonClick = () => {
        props.hide();
    };
    return (
        <Modal size="lg" show={props.show} onHide={props.hide} centered >
            <Modal.Header >
                <Modal.Title style={{ fontWeight: "600" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {`${props.description}`.split("\n").map((line, index) => (
                    <>
                        <p key={index} className="modal-text">
                            {line}
                        </p>
                        <p>
                            <br />
                        </p>
                    </>
                ))}
                <Row>
                    <Col >
                        {props.buttonNo &&
                            <button className="form-control" onClick={() => { toastr.error(props.message); }}>
                                <i className="bi bi-check-lg" />Evet</button>}

                    </Col>
                    <Col >
                        {props.buttonNo && <button onClick={handleNoButtonClick} className="form-control">
                            <i className="bi bi-x-lg"></i>Hayır</button>}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default ControlPopup;
