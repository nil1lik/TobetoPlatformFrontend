import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import ProfilePreInfo from './ProfilePreInfo';

type Props = {
    profilePhotoSrc: string,
}

const ProfilePreInfoBox = (props: Props) => {
    const profilePhoto = process.env.PUBLIC_URL + `/images/${props.profilePhotoSrc}`;

    return (
        <Card className='preInfoBox'>
            <Card.Body className='preInfoPhotoCont'>
                <Card.Img src={profilePhoto} className='preInfoPhoto' />
            </Card.Body>
            <Card.Body className=''>
                <ProfilePreInfo cardContClass='profilePreInfo' iconContClass='preInfoIconCont' headerClass='preInfoValue' valueClass='preInfoHeader' iconSrc="cv-name.svg" header='Ad Soyad' value='Eren Macit' />
            </Card.Body>
            <Card.Body>
                <ProfilePreInfo cardContClass='profilePreInfo' iconContClass='preInfoIconCont' headerClass='preInfoValue' valueClass='preInfoHeader' iconSrc="cv-date.svg" header='Doğum Tarihi' value='21.09.1997' />
            </Card.Body>
            <Card.Body>
                <ProfilePreInfo cardContClass='profilePreInfo' iconContClass='preInfoIconCont' headerClass='preInfoValue' valueClass='preInfoHeader' iconSrc="cv-mail.svg" header='E-Posta Adresi' value='ernmctt@gmail.com' />
            </Card.Body>
            <Card.Body>
                <ProfilePreInfo cardContClass='profilePreInfo' iconContClass='preInfoIconCont' headerClass='preInfoValue' valueClass='preInfoHeader' iconSrc="cv-phone.svg" header='Telefon Numarası' value='+905458142949' />
            </Card.Body>
        </Card>
    )
}

export default ProfilePreInfoBox