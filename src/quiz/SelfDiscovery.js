import React from 'react';

const SelfDiscovery = () => {
  return (
    <div className="container py-5">
      <h2 className="text-primary mb-4">Self Discovery Assessment</h2>
      <form>

        {/* Q1 */}
        <div className="mb-4">
          <label className="form-label fw-bold">
            1. What type of activities do you enjoy the most?
          </label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="activity" id="q1a1" />
            <label className="form-check-label" htmlFor="q1a1">
              Solving technical problems
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="activity" id="q1a2" />
            <label className="form-check-label" htmlFor="q1a2">
              Helping others learn
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="activity" id="q1a3" />
            <label className="form-check-label" htmlFor="q1a3">
              Designing visuals or interfaces
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="activity" id="q1a4" />
            <label className="form-check-label" htmlFor="q1a4">
              Working with numbers
            </label>
          </div>
        </div>

        {/* Q2 */}
        <div className="mb-4">
          <label className="form-label fw-bold">
            2. How do you prefer to work?
          </label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="workStyle" id="q2a1" />
            <label className="form-check-label" htmlFor="q2a1">
              Independently
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="workStyle" id="q2a2" />
            <label className="form-check-label" htmlFor="q2a2">
              In a team
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="workStyle" id="q2a3" />
            <label className="form-check-label" htmlFor="q2a3">
              Leading a group
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="workStyle" id="q2a4" />
            <label className="form-check-label" htmlFor="q2a4">
              With constant guidance
            </label>
          </div>
        </div>

        <button className="btn text-white" style={{ backgroundColor: '#0D40A5' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SelfDiscovery;
