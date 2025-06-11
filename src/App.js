import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from "./pages/List";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">รายการข้อมูล</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;