import React, { ReactNode } from 'react'
import { Card } from 'react-bootstrap'

type Props = {
  titleClass: string,
  title: string,
  children: ReactNode,
}

const ProfileBox = (props: Props) => {
  return (
    <Card className='profileBox'>
      <Card.Body>
        <Card.Title className={props.titleClass}>{props.title}</Card.Title>
        <hr />
        {props.children}
      </Card.Body>
    </Card>
  )
}

export default ProfileBox