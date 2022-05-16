import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const App = () => {
  useEffect(() => {
    document.title = "Siddhi Logistics || logistics for all";
  });

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
};

export default App;
