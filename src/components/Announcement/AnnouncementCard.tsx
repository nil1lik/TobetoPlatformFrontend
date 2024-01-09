import { Card } from "react-bootstrap";

type Props = {
  cardHeader: string;
  cardMeta?: string;
  cardDescription: string;
  cardText: string;
  cardLink1?: string;
  cardLink2?: string;
};

const AnnouncementCard = (props: Props) => {
  return (
    <div>
      <Card className="card-notify" style={{ width: "18rem" }}>
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

export default AnnouncementCard;
