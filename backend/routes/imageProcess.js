const express = require("express");
const multer = require("multer");
const router = express.Router();
const { exec } = require("child_process");

const upload = multer({ dest: "uploads/" });

router.post("/imageProcess", upload.single("image"), (req, res) => {
    const imagePath = req.file.path;

    // Simulate running the Python script to extract keywords
    exec(`python utils/extract_text.py ${imagePath}`, (error, stdout, stderr) => {
        if (error || stderr) {
            return res.status(500).json({ error: "Failed to process the image" });
        }
        const keywords = stdout.trim();
        return res.json({ keywords });
    });
});

module.exports = router;
