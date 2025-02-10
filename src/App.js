import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import Catalog from "./pages/Сatalog";
import Profile from "./pages/Profile";
import Solo from "./manga/sololeveling";
import Ghoul from "./manga/ghoul";
import Ghoul2 from "./manga/ghoul_re";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manga/sololeveling" element={<Solo />} />
        <Route path="/manga/ghoul" element={<Ghoul />} />
        <Route path="/manga/ghoul-re" element={<Ghoul2 />} />
      </Routes>
    </Router>
  );
}

export default App;
