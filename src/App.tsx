import React from "react";
import Platform from "./pages/Platform/Platform";
import Footer from "./layouts/Footer/Footer";
import Navigation from "./layouts/Navbar/Navigation";
import Education from "./pages/Education/Education";
import Announcement from "./pages/Announcement/Announcement";
import Profile from "./pages/Profile/Profile";
import Evaluation from "./pages/Evaluation/Evaluation";
import Catalog from "./pages/Catalog/Catalog";
import Calendar from "./pages/Calendar/Calendar";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import ProfileInformationEdit from "./components/ProfileEdit/ProfileInformationEdit";
import ExperienceEdit from "./components/ProfileEdit/ExperienceEdit";
import GradutionEdit from "./components/ProfileEdit/GraduationEdit";
import SkillEdit from "./components/ProfileEdit/SkillEdit";
import CertificateEdit from "./components/ProfileEdit/CertificateEdit";
import SocialMediaAccountEdit from "./components/ProfileEdit/SocialMediaAccountEdit";
import LanguageEdit from "./components/ProfileEdit/LanguageEdit";
import Settings from "./components/ProfileEdit/Settings";
import { Route, Routes } from "react-router-dom";
import EducationDetail from "./pages/Education/EducationDetail";
import CalendarDetail from "./pages/Calendar/CalendarDetail";
import ChatBot from "./layouts/ChatBot/ChatBot";
import Register from "./pages/Register/Register";
import AuthProvider from "./contexts/AuthContext";
import Login from "./pages/Login/Login";

const profileEditUrl = "/profilim/profilimi-duzenle";

function App() {
  return (
    <>
      <Navigation />
      {/* <Container> */}
      <div className="body-height">
        <AuthProvider>
          <Routes>
            <Route path="/giris" element={<Login/>} />
            <Route path="/kayit-ol" element={<Register />} />
          </Routes>
        </AuthProvider>
        <Routes>
          <Route path="/platform" element={<Platform />} />
          <Route path="/profilim" element={<Profile />} />
          <Route path="/degerlendirmeler" element={<Evaluation />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/takvim" element={<CalendarDetail />} />
          <Route path="/egitimlerim" element={<Education />} />
          <Route path="/duyurular" element={<Announcement />} />
          <Route path="/profilim/profilimi-duzenle" element={<ProfileEdit />} />
          <Route path="/education-detail" element={<EducationDetail />} />
          <Route
            path={profileEditUrl + "/kisisel-bilgilerim"}
            element={<ProfileInformationEdit />}
          />
          <Route
            path={profileEditUrl + "/deneyimlerim"}
            element={<ExperienceEdit />}
          />
          <Route
            path={profileEditUrl + "/egitimlerim"}
            element={<GradutionEdit />}
          />
          <Route
            path={profileEditUrl + "/yetkinliklerim"}
            element={<SkillEdit />}
          />
          <Route
            path={profileEditUrl + "/sertifikalarim"}
            element={<CertificateEdit />}
          />
          <Route
            path={profileEditUrl + "/medya-hesaplarim"}
            element={<SocialMediaAccountEdit />}
          />
          <Route
            path={profileEditUrl + "/yabanci-dil"}
            element={<LanguageEdit />}
          />
          <Route path={profileEditUrl + "ayarlar"} element={<Settings />} />
        </Routes>
      </div>
      {/* </Container> */}
      <ChatBot />
      <Footer />
    </>
  );
}

export default App;
