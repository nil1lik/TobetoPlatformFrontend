import React from 'react'
import { Card, Image } from 'react-bootstrap'

type Props = {
  iconSrc: string,
  header: string,
  value: string,
}

const ProfileLanguage = (props: Props) => {
  const icon = process.env.PUBLIC_URL + `/images/${props.iconSrc}`;

  return (
    <div className='profilePreInfo'>
      <span className='preInfoIconCont'>
        <Image src={icon} className="preInfoImage" rounded />
      </span>
      <Card.Text className='preInfoValue'>
        <Card.Text className='preInfoHeader'>{props.header}</Card.Text>
        {props.value}
      </Card.Text>
    </div>)
}

export default ProfileLanguage