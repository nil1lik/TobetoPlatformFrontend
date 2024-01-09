import React from 'react'
import { TabPane, Tab } from 'semantic-ui-react'
import EducationCard from '../EducationCard/EducationCard'
import SurveyNotFound from '../Survey/SurveyNotFound'
import AnnouncementCard from '../Announcement/AnnouncementCard'
import ApplicationCard from '../Application/ApplicationCard'
import { Col, Container, Row } from 'react-bootstrap'

const panes = [
  {
    menuItem: 'Başvurularım',
    render: () => <TabPane attached={false}>
      <Container>
        <Row>
          <Col weight="33.3%"><ApplicationCard
            cardHeader='İstanbul Kodluyor Bilgilendirme'
            cardDescription='İstanbul Kodluyor Başvuru Formu onaylandı.'
            cardText='İstanbul Kodluyor Belge Yükleme Formu onaylandı.' /></Col>
          <Col><ApplicationCard
            cardHeader='İstanbul Kodluyor Bilgilendirme'
            cardDescription='İstanbul Kodluyor Başvuru Formu onaylandı.'
            cardText='İstanbul Kodluyor Belge Yükleme Formu onaylandı.' /></Col>
        </Row>
      </Container>
    </TabPane>,
  },
  {
    menuItem: 'Eğitimlerim',
    render: () => <TabPane attached={false}><EducationCard /></TabPane>,
  },
  {
    menuItem: 'Duyuru ve Haberlerim',
    render: () => <TabPane attached={false}><AnnouncementCard cardHeader='İstanbul Kodluyor Bilgilendirme' cardDescription='İstanbul Kodluyor Başvuru Formu onaylandı.' cardText='İstanbul Kodluyor Belge Yükleme Formu onaylandı.' /></TabPane>,
  },
  {
    menuItem: 'Anketlerim',
    render: () => <TabPane attached={false}><SurveyNotFound /></TabPane>,
  },
]

const PlatformTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default PlatformTab