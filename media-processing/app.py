from flask import Flask, request, jsonify
import pytesseract
from PIL import Image

app = Flask(__name__)

@app.route('/api/extract_keywords', methods=['POST'])
def extract_keywords():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    file = request.files['image']
    image = Image.open(file.stream)
    text = pytesseract.image_to_string(image)

    # Simulate keyword extraction
    keywords = text.split()[:10]  # Extract first 10 words as example
    return jsonify({"keywords": keywords})

if __name__ == '__main__':
    app.run(port=6000)
