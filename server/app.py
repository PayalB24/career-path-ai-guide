from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

from extensions import db  # from extensions.py
from models.user_model import User
from routes.auth_routes import auth_bp

app = Flask(__name__)
CORS(app)

# Database Configuration
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'database/career.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB
db.init_app(app)
with app.app_context():
    db.create_all()

# Register Auth Routes
app.register_blueprint(auth_bp)

# Load quiz question files
try:
    with open(os.path.join(BASE_DIR, 'ria_sec_questions.json')) as f:
        riasec_questions = json.load(f)
except Exception as e:
    print("Error loading RIASEC questions:", e)
    riasec_questions = []

try:
    with open(os.path.join(BASE_DIR, 'mbti_questions.json')) as f:
        mbti_questions = json.load(f)
except Exception as e:
    print("Error loading MBTI questions:", e)
    mbti_questions = []

try:
    with open(os.path.join(BASE_DIR, 'simulation_questions.json')) as f:
        simulation_questions = json.load(f)
except Exception as e:
    print("Error loading Real World Simulation questions:", e)
    simulation_questions = []

# ========== ROUTES ========== #

# RIASEC Questions
@app.route('/questions', methods=['GET'])
def get_riasec_questions():
    return jsonify(riasec_questions)

# RIASEC Submission + Scoring
@app.route('/submit', methods=['POST'])
def submit_riasec_answers():
    data = request.get_json()
    answers = data.get('answers')

    if not answers:
        return jsonify({'error': 'No answers provided'}), 400

    scores = {'R': 0, 'I': 0, 'S': 0, 'A': 0, 'E': 0, 'C': 0}
    for answer in answers:
        category = answer.get('category')
        value = answer.get('value', 0)
        if category in scores:
            scores[category] += value

    recommended = max(scores, key=scores.get)

    career_map = {
        'R': "Realistic (e.g., Engineer, Technician)",
        'I': "Investigative (e.g., Scientist, Analyst)",
        'S': "Social (e.g., Counselor, Teacher)",
        'A': "Artistic (e.g., Designer, Writer)",
        'E': "Enterprising (e.g., Manager, Entrepreneur)",
        'C': "Conventional (e.g., Accountant, Administrator)"
    }

    return jsonify({'result': career_map[recommended]})

# MBTI Questions
@app.route('/personality-questions', methods=['GET'])
def get_mbti_questions():
    return jsonify(mbti_questions)

# Real World Simulation Questions
@app.route('/realworld-questions', methods=['GET'])
def get_realworld_questions():
    return jsonify(simulation_questions)

# ============================= #

if __name__ == '__main__':
    app.run(debug=True)
