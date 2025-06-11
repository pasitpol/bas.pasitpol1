import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" }
    ]);
  }, []);
  return (
    <div>
      <h2>รายการข้อมูล</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>ชื่อ: สมชาย ใจดี</p>
      <p>รหัสนักศึกษา: 65123456</p>
    </div>
  );
}