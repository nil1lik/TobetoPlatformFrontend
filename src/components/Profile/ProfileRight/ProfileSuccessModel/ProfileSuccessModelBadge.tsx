import React from 'react'
import { Badge } from 'react-bootstrap'

type Props = {
    point: string,
    text: string,
}

const ProfileSuccessModelBadge = (props: Props) => {
    return (
        <div className='profileLabel'>
            <span className='profileLabelBadge'>
                <Badge bg="secondary">{props.point}</Badge>
            </span>
            <span className='profileLabelText'>
                {props.text}
            </span>
        </div>
    )
}

export default ProfileSuccessModelBadge