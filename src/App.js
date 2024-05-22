import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Searchpage from "./pages/searchpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/search" element={<Searchpage />} />
      </Routes>
    </Router>
  );
}

export default App;
