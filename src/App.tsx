import { Route, Routes } from "react-router-dom";
import Platform from "./pages/Platform/Platform";
import Footer from "./layouts/Footer/Footer";
import { Container } from "semantic-ui-react";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Platform />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
