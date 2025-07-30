# server/services/auth_service.py

from flask import jsonify

# This is just an in-memory store for demo
users = []

def register_user(data):
    email = data.get('email')
    if any(u['email'] == email for u in users):
        return jsonify({'message': 'Email already registered'}), 400
    users.append(data)
    return jsonify({'message': 'Registered successfully'}), 200

def login_user(data):
    for user in users:
        if user['email'] == data.get('email') and user['password'] == data.get('password'):
            return jsonify({'message': 'Login successful', 'user': user}), 200
    return jsonify({'message': 'Invalid credentials'}), 401
