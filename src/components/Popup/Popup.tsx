import React from "react";
import { Modal } from "react-bootstrap";

type Props = {
  title: string;
  description: string;
  button?: boolean;
  duration?: string;
  show: boolean;
  hide: () => void
};

const Popup = (props: Props) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <Modal size="lg" show={props.show} onHide={props.hide} centered >
      <Modal.Header closeButton>
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
            {props.duration && <p>{props.duration}</p>}
          </>
        ))}
        {props.button && <button className="btnCard  w-100">Raporu Görüntüle</button>}
      </Modal.Body>
    </Modal>
  );
};

// Popup.defaultProps = {
//   title: "",
//   description: "",
//   button: false,
// };

export default Popup;
