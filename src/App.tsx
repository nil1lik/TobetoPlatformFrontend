import { Route, Routes } from "react-router-dom";
import Platform from "./pages/Platform/Platform";
import Footer from "./layouts/Footer/Footer";
import { Container } from "semantic-ui-react";
import Navigation from "./layouts/Navbar/Navigation";
import Education from "./pages/Education/Education";
import Announcement from "./pages/Announcement/Announcement";
import Profile from "./pages/Profile/Profile";
import Evaluation from "./pages/Evaluation/Evaluation";
import Catalog from "./pages/Catalog/Catalog";
import Calendar from "./pages/Calendar/Calendar";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";

function App() {
  return (
    <>
      <Navigation />
      {/* <Container> */}
        <Routes>
          <Route path="/" element={<Platform />} />
          <Route path="/profilim" element={<Profile />} />
          <Route path="/degerlendirmeler" element={<Evaluation />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/takvim" element={<Calendar />} />
          <Route path="/egitimlerim" element={<Education />} />
          <Route path="/duyurular" element={<Announcement />} />
          <Route path="/profilim/profilimi-duzenle" element={<ProfileEdit />} />
        </Routes>
      {/* </Container> */}
      <Footer />
    </>
  );
}

export default App;
