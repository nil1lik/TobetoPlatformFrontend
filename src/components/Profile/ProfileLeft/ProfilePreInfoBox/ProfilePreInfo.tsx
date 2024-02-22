import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'

type Props = {
  cardContClass: string
  iconSrc: string,
  header: string,
  value: string,
  iconContClass?: string,
  headerClass: string,
  valueClass: string,
}

const ProfilePreInfo = (props: Props) => {
  // const icon = process.env.PUBLIC_URL + `/images/${props.iconSrc}`;

  return (
    <div className={props.cardContClass}>
      <span className={props.iconContClass}>
        <Image src={props.iconSrc} className="preInfoImage" rounded />
      </span>
      <Card.Text className={props.headerClass}>
        <Card.Text className={props.valueClass}>{props.header}</Card.Text>
        {props.value}
      </Card.Text>
    </div>
  )
}

export default ProfilePreInfo