import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Dashboard from "./components/Dashboard";
import AgentCustomization from "./components/AgentCustomization";
import  Voice from "./components/Voice";
import Analysis from "./components/Analysis";
import Security from "./components/Security";
import Advanced from "./components/Advanced";
function App() {
  return (
    <Router basename="/Berry-Dial-Agents">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agent-customization" element={<AgentCustomization />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/security" element={<Security />} />
        <Route path="/advanced" element={<Advanced />} />
      </Routes>
    </Router>
  );
}

export default App;
