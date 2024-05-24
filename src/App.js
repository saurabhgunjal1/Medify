import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Searchpage from "./pages/searchpage";
import Bookingpage from "./pages/bookingpage";
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <Router>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="/booking" element={<Bookingpage />} />
        </Routes>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
