import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Chatbot from '../chatbot/Chatbot'; // ✅ Import the chatbot

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light text-dark">
      {/* Hero Section */}
      <section className="text-center py-5 bg-white shadow position-relative">
        <h1 className="display-4 fw-bold text-gradient mb-3">
          MapMyFuture
        </h1>
        <p className="lead text-secondary mb-4">
          Discover Your Dream Career with AI Insights
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/Auth" className="btn btn-success px-4 py-2 fw-semibold shadow-sm">
            Start Your Journey
          </Link>
          <Link to="/about" className="btn btn-outline-dark px-4 py-2">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-body-tertiary">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title" data-icon="🧠">
                    Personalized Assessments
                  </h5>
                  <p className="card-text text-secondary">
                    Quizzes based on your interests, strengths, and goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title" data-icon="📊">
                    AI Insights
                  </h5>
                  <p className="card-text text-secondary">
                    Recommendations powered by real-world career data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title" data-icon="🚀">
                    Career Roadmaps
                  </h5>
                  <p className="card-text text-secondary">
                    Step-by-step journey to reach your dream profession.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot /> {/* ✅ Chatbot added here */}
    </div>
  );
}

export default Home;
