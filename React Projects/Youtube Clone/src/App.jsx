import { Routes, Route } from "react-router-dom"; // ✅ Import Routes & Route
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import React, { useState } from "react";

function App() {
  const [sideBar, setSideBar] = useState(true)

  return (
    <>
      <NavBar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
