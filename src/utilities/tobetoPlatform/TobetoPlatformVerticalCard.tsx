import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';


type Props = { image: string, text: string, description: string, buttonText: string }

const TobetoPlatformVerticalCard = (props: Props) => {
  return (
    <div>
      <Card className='card' style={{ width: '16rem' }}>
        <Card.Img className='card-img-edu' src={props.image} />
        <Card.Body>
          <Card.Title className='card-title-edu'>{props.text} </Card.Title>
          <Card.Text className='platform-course-date'>
            {props.description}
          </Card.Text>
          <Button className='apply-button w-100'>{props.buttonText} </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TobetoPlatformVerticalCard