import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  // 🔐 Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        navigate("/assessment/self-discovery");

      }
    } catch (err) {
      alert("Login failed. Please try again.");
      console.error(err);
    }
  };

  // 📝 Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setActiveTab("login");
      }
    } catch (err) {
      alert("Signup failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="position-relative container py-5" style={{ maxWidth: '500px' }}>
      {/* Skip Button */}
      <button
        className="btn btn-sm position-absolute top-0 end-0 m-3 text-white"
        style={{ backgroundColor: '#0D40A5' }}
        onClick={() => navigate('/dashboard')}
      >
        Skip to Dashboard
      </button>

      <h2 className="text-center mb-4 text-primary">Welcome to MapMyFuture</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </li>
      </ul>

      {activeTab === 'login' ? (
        <form className="border rounded p-4 shadow-sm bg-white" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#0D40A5' }}>
            Login
          </button>
        </form>
      ) : (
   
        <form className="border rounded p-4 shadow-sm bg-white" onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="signupName" placeholder="Enter your full name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="signupEmail" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" required />
          </div>
          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#0D40A5' }}>
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}

export default Auth;
