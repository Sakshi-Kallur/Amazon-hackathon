
from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

# Configure upload folder
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    social_content = request.form.get('socialContent')
    image = request.files['image']

    if image:
        filename = secure_filename(image.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        image.save(image_path)

    # Example logic for generating listing
    generated_title = f"{social_content} - Fitness Tracker"
    generated_description = f"Introducing {social_content}, a state-of-the-art product for your wellness journey!"
    generated_keywords = ["fitness", "tracker", "health", "wellness", "goal setting"]

    return jsonify({
        "title": generated_title,
        "description": generated_description,
        "keywords": generated_keywords
    })

if __name__ == '__main__':
    app.run(debug=True)
