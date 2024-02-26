import React, { ReactNode } from 'react'
import { Card } from 'react-bootstrap'

type Props = {
  className: string,
  children: ReactNode
}

const ProfileRoundItem = (props: Props) => {
  return (
    <>
      <Card.Body className={props.className}>{props.children}</Card.Body>
    </>
  )
}

export default ProfileRoundItem