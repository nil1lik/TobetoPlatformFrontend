import React from 'react'
import { Card } from 'react-bootstrap'

type Props = {
  skillName: string,
}

const ProfileSkill = (props: Props) => {
  return (
    <>
      <Card.Body className="profileSkill">{props.skillName}</Card.Body>
    </>
  )
}

export default ProfileSkill