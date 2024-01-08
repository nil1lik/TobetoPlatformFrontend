import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props = {}

const EducationCard = (props: Props) => {
  return (
    <div>
  <Card className='card' style={{ width: '16rem' }}>
      <Card.Img className='card-img' src="https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg" />
      <Card.Body>
        <Card.Title>Dr. Ecmel Ayral'dan Hoşgeldin Mesajı</Card.Title>
        <Card.Text className='platform-course-date'>
        21 Eylül 2023 15:20
        </Card.Text>
        <Button className='apply-button'>Eğitime Git</Button>
      </Card.Body>
    </Card></div>
  )
}

export default EducationCard
