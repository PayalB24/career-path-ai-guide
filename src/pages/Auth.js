// Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  return (
    <div className="position-relative container py-5" style={{ maxWidth: '500px' }}>
      {/* Top-Right Dashboard Skip Button */}
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

      {/* Forms */}
      {activeTab === 'login' ? (
        <form className="border rounded p-4 shadow-sm bg-white">
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#0D40A5' }}>
            Login
          </button>
        </form>
      ) : (
        <form className="border rounded p-4 shadow-sm bg-white">
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="signupName" placeholder="Enter your full name" />
          </div>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="signupEmail" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" />
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
