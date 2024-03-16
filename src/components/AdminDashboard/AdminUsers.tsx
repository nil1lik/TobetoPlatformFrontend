import React from "react";
import { Accordion, Container } from "react-bootstrap";

type Props = {};

const AdminUsers = (props: Props) => {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Kullanıcı Ara</Accordion.Header>
          <Accordion.Body>Kullanıcı Arama Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Rol İşlemleri</Accordion.Header>
          <Accordion.Body>Kullanıcı Rol Atama Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Kullanıcı Ekle</Accordion.Header>
          <Accordion.Body>Kullanıcı Ekleme Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Kullanıcı Bilgilerini Güncelle</Accordion.Header>
          <Accordion.Body>Kullanıcı Güncelleme Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Kullanıcı Kaldır</Accordion.Header>
          <Accordion.Body>Kullanıcı Kaldırma Formu Buraya Gelecek</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Container style={{ textAlign: "center", border: "1px solid black" }}>
        <h1>SONUÇ BURADA GÖSTERİLİR</h1>
      </Container>
    </>
  );
};

export default AdminUsers;
