import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import AnnouncementService from "../../services/announcementService";
import React, { useState } from "react";
import {Card, Image, Modal } from "react-bootstrap";

type Props = {
  announcementType: string,
  announcementEducation: string,
  announcementTitle: string,
  annoucementDateIcon: string,
  announcementDate: string,
  announcementDescription?: string
};

const AnnouncementCard = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-4 col-12">
      <Card className="card-notify">
        <Card.Body className="announcementInfoTop">
          <span>{props.announcementType}</span>
          <span>{props.announcementEducation}</span>
        </Card.Body>
        <Card.Body className="announcementHeader">
          <span>{props.announcementHeader}</span>
        </Card.Body>
        <Card.Body className="announcementInfoBottom">
          <span>
            <Image src={props.annoucementDateIcon} />
            {props.announcementDate}
          </span>
          <span className="announcementReadMore" onClick={handleShow}>
            Devamını Oku
          </span>
        </Card.Body>
      </Card>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "600" }}>Ocak Ayı Tercih Formu Bilgilendirmesi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            `Sevgili İstanbul Kodluyor’lu,
            Bu programda yer aldığın için tebrik ederiz. Tekrar aramıza hoşgeldin!
            Yazılım ve teknoloji kariyerindeki önemli bir adımı bugün atmış oldun. Yeni kariyer yolculuğunda Tobeto Ekibi olarak her zaman yanında olacağımızı bilmeni isteriz.
            Öncelikle oturumda en çok sorulan öğrencilik durumu ile ilgili sorular için aşağıdaki formu bugün içinde doldurmanı rica ediyoruz. Kişi bazlı inceleme yapılacak olup, süreci cuma günü gerçekleşecek mentor oturumunda konuşacağız.
Form: https://form.jotform.com/232985161869976
Peki bugünden itibaren bizleri neler bekliyor?
Asenkron içerikler: Bunlar platform üzerinden istediğin saatte izleyebileceğin videolu eğitimlerdir.
            Canlı fasilitatör oturumları: 2 Kasım Perşembe, 7 Kasım Salı, 9 Kasım Perşembe, 14 Kasım Salı ve 16 Kasım Perşembe olmak üzere saat 16.00-17.00 arasında gerçekleşecektir. Bunlara size atanan ders içindeki canlı oturum bölümünden katılacaksınız. Bu sayfanın görünümünü sunuma eklenen sayfadan da görebilirsin. Bu oturumlarda sadece eğitim videoları ile ilgili yani eğitim içeriğinde anlamadığınız veya merak ettiğiniz sorular sorulabilmektedir.Bu oturumların yerini sunumdaki sayfalardan da görebilirsin.
            Mentor ve Q&A oturumları: 3 Kasım Cuma, 10 Kasım Cuma, 15 Kasım Çarşamba ve 22 Kasım Çarşamba olmak üzere saat 14.00-15.00 arasında gerçekleşecektir. Bu oturumlarda projeye dair genel çerçevedeki sorular cevaplanacak olup, süreçte aktif olarak yapacaklarımız konuşulacaktır. Bu uzun proje yolculuğunda birbirimizin motivasyonu yüksek tutacağımız ve çeşitli sohbetleri gerçekleştireceğimiz oturumlar bunlar olacaktır.
            Kampüs Buluşması: Herkes için Kodlama sürecinde her adayın sadece 1 kez katılması yeterlidir. Eğitiminizi tamamladıktan sonraki ilk buluşmaya katılmanız beklenmektedir. Katılacağınız gün ve saat bilgisi size mail olarak iletilecektir. 25 Kasım’da İstanbul’da seninle yüz yüze tanışmayı heyecanla bekliyoruz. 25 Kasım’a katılamayan adaylar sonraki buluşmaya Ocak ayında katılabilirler sadece burada dikkat edilmesi gereken nokta;kKampüs buluşmasına katılmadan mesleki eğitimlere geçiş yapılamamaktadır. Ocak ayında kampüse katılıyorsanız, şubat ayındaki eğitimlere girebilirsiniz.
 Discorda katılmadan önce mutlaka yapman gerekenler;
 Sunucuya özel Ad Soyad – Cfe 3A şeklinde isim düzenlemesi yapmanız gerekmekte. Örneğin; 3A grubuna atandıysanız Ad Soyad- CfE 3A, 3B grubuna atandıysanız Ad Soyad – CfE 3B yazarak aşağıdaki linkten dahil olunuz.
            Hem mobil hem web uygulaması kullananlar lütfen sadece 1 kere aynı isimle giriş yapın, 2 ayrı kişi olarak giriş yapmayın!
            Aşağıdaki link 7 gün süre ile sınırlıdır. Lütfen süresi geçmeden katılın.
Discord: https://discord.gg/MsxaHmdb
            Linke girdikten sonra size kullanıcı etiketleri atanacak ve izin verilen sayfaları görebileceksiniz. Lütfen girişte kuralları okuyunuz. Duyuruları discorddan ve platformdan takip edebilirsiniz.
Uzun soluklu bu yolculuğumuzda başarılar dileriz.`.split('\n').map((line, index) => (
              <>
                <p key={index} className="modal-text">{line}</p><p><br /></p>
              </>
            ))
          }
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AnnouncementCard;
