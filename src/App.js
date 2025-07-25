import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CareerResult from "./pages/CareerResult";
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
