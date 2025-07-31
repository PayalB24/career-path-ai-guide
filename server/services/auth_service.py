from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models.user_model import User
from extensions import db


def register_user(data):
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already registered'}), 400

    hashed_pw = generate_password_hash(password)
    new_user = User(name=name, email=email, password=hashed_pw)
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'Registered successfully'}), 200

def login_user(data):
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful', 'user': user.to_dict()}), 200
    
    return jsonify({'message': 'Invalid credentials'}), 401
