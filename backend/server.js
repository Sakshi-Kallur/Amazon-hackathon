
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const generationRoutes = require("./routes/generationListing"); // Import the new route

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Use the new route for product description generation
// app.use("/api/generateListing", generationRoutes);

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Backend server is running on http://localhost:${PORT}`);
// });
const express = require("express");
const cors = require("cors"); // Import the cors package
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp"); // For image processing

const app = express();
const PORT = 5000;

// Use CORS middleware
app.use(cors());

// Multer configuration for file uploads
const upload = multer({ dest: "uploads/" });

// Folder containing stored images
const storedImagesFolder = path.join(__dirname, "images");

// Example data for stored images
const storedImageDetails = {
  "bag.jfif": {
    description: "A versatile and durable black Nike bag perfect for travel, gym, or daily use.",
    keyFeatures: [
      "Spacious compartments",
      "Adjustable shoulder straps",
      "Lightweight and sturdy material",
      "Water-resistant design",
      "Sleek black finish with Nike branding",
    ],
    keywords: [
      "Nike bag",
      "black backpack",
      "gym bag",
      "travel bag",
      "durable bag",
      "sports bag",
    ],
  },
  "mobile.jpeg": {
    description: "Apple's flagship iPhone 14 Pro Max with cutting-edge features and stunning design.",
    keyFeatures: [
      "6.7-inch Super Retina XDR display",
      "A16 Bionic chip for lightning-fast performance",
      "48MP pro camera system",
      "All-day battery life",
      "Dynamic Island for notifications",
    ],
    keywords: [
      "iPhone 14 Pro Max",
      "Apple smartphone",
      "high-performance mobile",
      "A16 Bionic chip",
      "pro camera",
      "luxury smartphone",
    ],
  }
};

// Middleware to parse JSON
app.use(express.json());

// API to handle image upload and compare with stored images
app.post("/api/compare-images", upload.single("image"), async (req, res) => {
  try {
    const uploadedImagePath = req.file.path;

    // Read all stored images
    const storedImages = fs.readdirSync(storedImagesFolder);

    for (const storedImage of storedImages) {
      const storedImagePath = path.join(storedImagesFolder, storedImage);

      // Resize and normalize both images for comparison
      const [uploadedBuffer, storedBuffer] = await Promise.all([
        sharp(uploadedImagePath).resize(200, 200).toBuffer(),
        sharp(storedImagePath).resize(200, 200).toBuffer(),
      ]);

      if (uploadedBuffer.equals(storedBuffer)) {
        // Match found
        const details = storedImageDetails[storedImage] || {};
        return res.status(200).json({
          matchFound: true,
          description: details.description,
          keyFeatures: details.keyFeatures,
          keywords: details.keywords,
        });
      }
    }

    // No match found
    return res.status(404).json({ matchFound: false, error: "No matching image found." });
  } catch (error) {
    console.error("Error comparing images:", error);
    return res.status(500).json({ error: "Error processing the request." });
  } finally {
    // Clean up the uploaded file
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
