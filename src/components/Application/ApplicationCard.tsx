import { Card } from "react-bootstrap";

type Props = {
  cardHeader: string;
  cardMeta?: string;
  cardDescription: string;
  cardText: string;
  cardLink1?: string;
  cardLink2?: string;
};

const ApplicationCard = (props: Props) => {
  return (
    <div>
      <Card className="app-card-notify card-notify">
        <Card.Body>
          <Card.Title>{props.cardHeader}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.cardDescription}
          </Card.Subtitle>
          <Card.Text>{props.cardText}</Card.Text>
          <Card.Link href="#">{props.cardLink1}</Card.Link>
          <Card.Link href="#">{props.cardLink1}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ApplicationCard;