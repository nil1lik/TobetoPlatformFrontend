import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProfileMediaAccounts from '../../ProfileLeft/ProfileMediaAccounts'
import ProfileSuccessModelBadge from './ProfileSuccessModelBadge'

type Props = {
  
}

const ProfileSuccessModel = (props: Props) => {
  return (
    <div className='successModelCont'>      
      <Row>
        <Col className="col-6">
          <ProfileMediaAccounts imageSrc="chart.png" className='mediaAccountPhoto' />
        </Col>
        <Col className="col-6">
          <ProfileSuccessModelBadge point='3.8' text='Yeni dünyaya hazırlanıyorum' />
          <ProfileSuccessModelBadge point='4.4' text='Profesyonel duruşumu geliştiriyorum' />
          <ProfileSuccessModelBadge point='3.5' text='Kendimi tanıyor ve yönetiyorum' />
          <ProfileSuccessModelBadge point='3.7' text='Kendimi sürekli geliştiriyorum' />
          <ProfileSuccessModelBadge point='4' text='Başkaları ile birlikte çalışıyorum' />
          <ProfileSuccessModelBadge point='3.9' text='Sonuç ve başarı odaklıyım' />
          <ProfileSuccessModelBadge point='3.9' text='Anlıyorum ve anlaşılıyorum' />
        </Col>
      </Row>
    </div>
  )
}

export default ProfileSuccessModel