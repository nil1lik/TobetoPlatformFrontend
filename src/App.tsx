import { Route, Routes } from "react-router-dom";
import Platform from "./pages/Platform/Platform";
import Footer from "./layouts/Footer/Footer";
import { Container } from "semantic-ui-react";
import Navigation from "./layouts/Navbar/Navigation";

function App() {
  return (
    <>
      <Navigation />
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
