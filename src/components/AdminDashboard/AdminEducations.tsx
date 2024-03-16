import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

type Props = {}

const AdminEducations = (props: Props) => {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Eğitim Ara</Accordion.Header>
          <Accordion.Body>Eğitim Arama Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Eğitim Atama</Accordion.Header>
          <Accordion.Body>Eğitim Atama Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Eğitim Ekle</Accordion.Header>
          <Accordion.Body>Eğitim Ekleme Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Eğitim Bilgilerini Güncelle</Accordion.Header>
          <Accordion.Body>Eğitim Güncelleme Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Eğitim Kaldır</Accordion.Header>
          <Accordion.Body>Eğitim Kaldırma Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Container style={{ textAlign: "center", border: "1px solid black" }}>
        <h1>SONUÇ BURADA GÖSTERİLİR</h1>
      </Container>
    </>
  )
}

export default AdminEducations