# import pytesseract
# from PIL import Image
# import sys

# if len(sys.argv) < 2:
#     print("Usage: python extract_text.py <image_path>")
#     sys.exit(1)

# image_path = sys.argv[1]
# try:
#     img = Image.open(image_path)
#     text = pytesseract.image_to_string(img)
#     print(text.strip())
# except Exception as e:
#     print(f"Error: {str(e)}")
#     sys.exit(1)
import pytesseract
from PIL import Image
import sys

if len(sys.argv) < 2:
    print("Usage: python extract_text.py <image_path>")
    sys.exit(1)

image_path = sys.argv[1]
try:
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    print(text.strip())
except Exception as e:
    print(f"Error: {str(e)}")
    sys.exit(1)
