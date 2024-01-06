import React from "react";
import Platform from "./pages/Platform/Platform";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

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
