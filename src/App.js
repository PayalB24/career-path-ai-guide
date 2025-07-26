import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CareerResult from "./pages/CareerResult";

// Correct imports from quiz folder
import SelfDiscovery from "./quiz/SelfDiscovery";
import PersonalityCareerFit from "./quiz/PersonalityCareerFit";
import RealWorldSimulation from "./quiz/RealWorldSimulation";

import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/result" element={<CareerResult />} />

            {/* Assessment Routes */}
            <Route path="/assessment/self-discovery" element={<SelfDiscovery />} />
            <Route path="/assessment/personality-fit" element={<PersonalityCareerFit />} />
            <Route path="/assessment/real-world" element={<RealWorldSimulation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
