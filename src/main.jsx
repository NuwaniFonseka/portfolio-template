import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";
import ProjectFive from "./pages/ProjectFive";
import ProjectSix from "./pages/ProjectSix";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/project-one" element={<ProjectOne />} />
      <Route path="/projects/project-two" element={<ProjectTwo />} />
      <Route path="/projects/project-three" element={<ProjectThree />} />
      <Route path="/projects/project-four" element={<ProjectFour />} />
      <Route path="/projects/project-five" element={<ProjectFive />} />
      <Route path="/projects/project-six" element={<ProjectSix />} />

    </Routes>
  </BrowserRouter>
);
