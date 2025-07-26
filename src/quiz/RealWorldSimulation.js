import React from 'react';

const RealWorldSimulation = () => {
  return (
    <div className="container py-5">
      <h2 className="text-primary mb-4">Real World Simulation Test</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">You're assigned to build a website with a team, what's your role?</label>
          <select className="form-select">
            <option>Write code and develop features</option>
            <option>Organize tasks and lead communication</option>
            <option>Create the layout and visuals</option>
            <option>Test and fix bugs</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">You’re asked to pitch an idea. What’s your focus?</label>
          <select className="form-select">
            <option>Data and analysis</option>
            <option>Visual presentation</option>
            <option>Real-world impact</option>
            <option>Feasibility and execution</option>
          </select>
        </div>
        <button className="btn text-white" style={{ backgroundColor: '#0D40A5' }}>Submit</button>
      </form>
    </div>
  );
};

export default RealWorldSimulation;
