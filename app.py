from flask import Flask, request, jsonify

app = Flask(__name__)

users = {}

@app.route("/")
def home():
    return "Welcome to FarmValu AI Backend"

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if username in users:
        return jsonify({"message": "User already exists"})

    users[username] = password
    return jsonify({"message": "Signup successful"})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if users.get(username) == password:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid username or password"})

@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.json
    question = data.get("question", "").lower()

    if "rice" in question:
        answer = "Rice grows best in warm temperatures with adequate water."
    elif "tomato" in question:
        answer = "Tomatoes need well-drained soil and regular watering."
    else:
        answer = "Thank you for your question. AI support will be improved soon."

    return jsonify({"answer": answer})

@app.route("/fertilizer", methods=["POST"])
def fertilizer():
    data = request.json
    crop = data.get("crop", "").lower()

    if crop == "rice":
        rec = "Use NPK 20:20:20 during the growth stage."
    elif crop == "maize":
        rec = "Apply nitrogen-rich fertilizer."
    else:
        rec = "Consult your local agriculture officer for recommendations."

    return jsonify({"recommendation": rec})

if __name__ == "__main__":
    app.run(debug=True)
