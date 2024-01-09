import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


type Props = {image: string, text: string, description: string, buttonText: string}

const TobetoPlatformVerticalCard = (props: Props) => {
  return (
    <div><Card className='card' style={{ width: '16rem' }}>
    <Card.Img className='card-img' src={props.image} />
    <Card.Body>
      <Card.Title>{props.text} </Card.Title>
      <Card.Text className='platform-course-date'>
      {props.description} 
      </Card.Text>
      <Button className='apply-button'>{props.buttonText} </Button>
    </Card.Body>
  </Card></div>
  )
}

export default TobetoPlatformVerticalCard