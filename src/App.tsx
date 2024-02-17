import React, { useState } from "react";
import RouteDefinitions from "./components/Routes/RouteDefinitions";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouteDefinitions />
    </AuthProvider>
  );
}

export default App;
