
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
