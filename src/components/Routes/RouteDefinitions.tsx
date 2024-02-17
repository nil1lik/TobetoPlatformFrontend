import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import Platform from "../../pages/Platform/Platform";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { OverlayLoader } from "../OverlayLoader/OverlayLoader";
import Navigation from "../../layouts/Navbar/Navigation";
import ProfileEdit from "../../pages/ProfileEdit/ProfileEdit";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import Evaluation from "../../pages/Evaluation/Evaluation";
import Catalog from "../../pages/Catalog/Catalog";
import CalendarDetail from "../../pages/Calendar/CalendarDetail";
import Education from "../../pages/Education/Education";
import Announcement from "../../pages/Announcement/Announcement";
import Communication from "../../pages/Contact/Communication";
import EducationDetail from "../../pages/Education/EducationDetail";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ForgotPassword/ResetPassword";
import ProfileInformationEdit2 from "../Profile/ProfileEdit/ProfileInformationEdit";
import ExperienceEdit from "../Profile/ProfileEdit/ExperienceEdit";
import GraduationEdit from "../Profile/ProfileEdit/GraduationEdit";
import SkillEdit from "../Profile/ProfileEdit/SkillEdit";
import CertificateEdit from "../Profile/ProfileEdit/CertificateEdit";
import SocialMediaAccountEdit from "../Profile/ProfileEdit/SocialMediaAccountEdit";
import LanguageEdit from "../Profile/ProfileEdit/LanguageEdit";
import Settings from "../Profile/ProfileEdit/Settings";
import ChatBot from "../../layouts/ChatBot/ChatBot";
import Footer from "../../layouts/Footer/Footer";
import { useAuthContext } from "../../contexts/AuthContext";
import NotFoundPage from "../../pages/NotFound/NotFound";

type Props = {};
const profileEditUrl = "/profilim/profilimi-duzenle";

const RouteDefinitions = (props: Props) => {
  const { auth } = useAuthContext();

  const specialPaths = ["/", "/profilim", "/profilim/*", "/degerlendirmeler", "katalog", "takvim", "egitimlerim", "duyurular", "iletisim", "/education-detail*", "/kisisel-bilgilerim", "/deneyimlerim", "/egitimlerim", "/yetkinliklerim", "/sertifikalarim", "/medya-hesaplarim", "/yabanci-dil", "/ayarlar"];


  return (
    <LoadingContextProvider>
      <OverlayLoader />
      <Navigation />
      {/* <Container> */}
      <div className="body-height">
        <Routes>
          {!auth ? (
            <>
              <Route path="/giris" element={<Login />} />
              <Route path="/kayit-ol" element={<Register />} />
              <Route path="/sifremi-unuttum" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Platform />} />
              <Route path="/profilim" element={<Profile />} />
              <Route
                path="/profilim/profilimi-duzenle"
                element={<ProfileEdit />}
              />
              <Route path="/degerlendirmeler" element={<Evaluation />} />
              <Route path="/katalog" element={<Catalog />} />
              <Route path="/takvim" element={<CalendarDetail />} />
              <Route path="/egitimlerim" element={<Education />} />
              <Route path="/duyurular" element={<Announcement />} />
              <Route path="/iletisim" element={<Communication />} />
              <Route
                path="/education-detail/:id"
                element={<EducationDetail />}
              />
              <Route 
                path={profileEditUrl + "/kisisel-bilgilerim"}
                element={<ProfileInformationEdit2 />}
              />
              <Route
                path={profileEditUrl + "/deneyimlerim"}
                element={<ExperienceEdit />}
              />
              <Route
                path={profileEditUrl + "/egitimlerim"}
                element={<GraduationEdit />}
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
              /> /yabanci-dil
              <Route
                path={profileEditUrl + "/yabanci-dil"}
                element={<LanguageEdit />}
              />

              <Route path={profileEditUrl + "/ayarlar"} element={<Settings />} />
            </>
          )}
           <Route
            path="/*"
            element={
              specialPaths.includes(window.location.pathname) 
                ? <Navigate to="/giris" replace /> 
                : <NotFoundPage />
            }
          />
          
        </Routes>
      </div>
      {/* </Container> */}
      <ChatBot />
      <Footer />
    </LoadingContextProvider>
  );
};

export default RouteDefinitions;
