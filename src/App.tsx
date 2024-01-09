import { Route, Routes } from "react-router-dom";
import Platform from "./pages/Platform/Platform";
import Footer from "./layouts/Footer/Footer";
import { Container } from "semantic-ui-react";
import Navigation from "./layouts/Navbar/Navigation";
import Education from "./pages/Education/Education";
import Announcement from "./pages/Announcement/Announcement";

function App() {
  return (
    <>
      <Navigation />
      {/* <Container> */}
        <Routes>
          <Route path="/" element={<Platform />} />
          <Route path="/egitimlerim" element={<Education />} />
          <Route path="/duyurular" element={<Announcement />} />
        </Routes>
      {/* </Container> */}
      <Footer />
    </>
  );
}

export default App;
