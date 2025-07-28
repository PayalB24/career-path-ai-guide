import React from 'react';

const PersonalityCareerFit = () => {
  return (
    <div className="container py-5">
      <h2 className="text-primary mb-4">Personality & Career Fit</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Choose the statement that describes you best:</label>
          <select className="form-select">
            <option>I enjoy experimenting and trying new things</option>
            <option>I prefer structured and clear instructions</option>
            <option>I thrive in social environments</option>
            <option>I like to analyze situations deeply</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">How do you handle unexpected challenges?</label>
          <select className="form-select">
            <option>Adapt quickly and make decisions</option>
            <option>Analyze deeply before acting</option>
            <option>Ask others for input</option>
            <option>Prefer to avoid change</option>
          </select>
        </div>
        <button className="btn text-white" style={{ backgroundColor: '#0D40A5' }}>Submit</button>
      </form>
    </div>
  );
};

export default PersonalityCareerFit;
