import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const scaleLabels = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
];

const PersonalityCareerFit = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/personality-questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error("Error fetching personality questions", err));
  }, []);

  const handleChange = (value) => {
    setResponses({ ...responses, [currentIndex]: value });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const answers = questions.map((q, idx) => ({
      category: q.category,
      value: Number(responses[idx] || 0),
    }));

    try {
      const res = await axios.post("http://127.0.0.1:5000/personality-submit", { answers });
      setResult(res.data.recommendation);

      setTimeout(() => {
        navigate("/assessment/real-world");
      }, 1500);
    } catch (err) {
      console.error("Error submitting answers", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🧠 Personality-Career Fit Assessment</h2>

      <div className="row">
        {/* Left Panel: Questions */}
        <div className="col-md-7">
          {questions.length > 0 && (
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                  className="card shadow p-4 mb-4"
                  style={{ minHeight: "300px", borderRadius: "20px" }}
                >
                  <h5 className="mb-3">
                    Q{currentIndex + 1}: {questions[currentIndex].question}
                  </h5>

                  {scaleLabels.map((label, value) => (
                    <div key={value} className="form-check my-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`q${currentIndex}`}
                        value={value + 1}
                        checked={responses[currentIndex] === value + 1}
                        onChange={() => handleChange(value + 1)}
                        id={`q${currentIndex}_${value}`}
                      />
                      <label
                        className="form-check-label ms-2"
                        htmlFor={`q${currentIndex}_${value}`}
                      >
                        {label}
                      </label>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleBack}
                  disabled={currentIndex === 0}
                >
                  ⬅️ Back
                </button>

                {currentIndex === questions.length - 1 ? (
                  <button type="submit" className="btn btn-success">
                    ✅ Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={!responses[currentIndex]}
                  >
                    Next ➡️
                  </button>
                )}
              </div>
            </form>
          )}

          {result && (
            <div className="alert alert-info mt-4">
              <h5>🎯 Suggested Career Area:</h5>
              <p className="fw-bold text-primary">{result}</p>
            </div>
          )}
        </div>

        {/* Right Panel: Chatbot Placeholder */}
        <div className="col-md-5">
          <div
            className="card shadow p-3"
            style={{ height: "100%", borderRadius: "20px" }}
          >
            <h5 className="mb-4">🧭 CareerBot Assistant</h5>
            <p>Ask your doubts while you assess your personality fit.</p>
            <div
              style={{
                height: "300px",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                padding: "1rem",
                overflowY: "auto",
              }}
            >
              <p>
                <em>This is where your AI chatbot will be integrated.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityCareerFit;
