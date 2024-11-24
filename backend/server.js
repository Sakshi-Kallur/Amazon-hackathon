// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Route for processing social media text input
// app.post("/api/socialMediaData", async (req, res) => {
//     const { socialMediaText } = req.body;

//     // Simulate product description generation
//     const productDescription = `This is a generated listing based on: ${socialMediaText}`;
//     const price = "$19.99";

//     return res.json({ description: productDescription, price });
// });

// // Route for generating a listing based on text input
// app.post("/api/generate_listing", (req, res) => {
//     const { socialMediaText } = req.body;

//     if (!socialMediaText) {
//         return res.status(400).json({ error: "Social media text is required" });
//     }

//     const listing = `This is a generated listing based on: ${socialMediaText}`;
//     res.json({ listing });
// });

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Backend server is running on http://localhost:${PORT}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const generationRoutes = require("./routes/generationListing"); // Import the new route

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the new route for product description generation
app.use("/api/generateListing", generationRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});

