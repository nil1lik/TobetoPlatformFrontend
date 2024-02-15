import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import "./utilities/Constants/root.css";
import "toastr/build/toastr.min.css";
import "reactjs-popup/dist/index.css";
import { EducationProvider } from "./contexts/EducationContext";
import Education from "./pages/Education/Education";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <EducationProvider>
        <App />
    </EducationProvider>
  </BrowserRouter>
);
