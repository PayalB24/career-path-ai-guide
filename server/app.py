from flask import Flask, jsonify, request
from flask_cors import CORS
import json

from routes.auth_routes import auth_bp  # 🔹 Import auth blueprint

app = Flask(__name__)
CORS(app)

# 🔹 Register the authentication blueprint
app.register_blueprint(auth_bp)

# 🔹 Load career questions
with open('questions.json') as f:
    questions_data = json.load(f)

@app.route('/questions', methods=['GET'])
def get_questions():
    return jsonify(questions_data)

@app.route('/submit', methods=['POST'])
def submit_answers():
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

if __name__ == '__main__':
    app.run(debug=True)
