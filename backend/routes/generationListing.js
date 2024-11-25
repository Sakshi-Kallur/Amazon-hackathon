const express = require("express");
const router = express.Router();

// Function to process and segregate hashtags and captions into domains
function extractAttributesFromText(text) {
    const attributes = {
        type: null,
        price: null,
        color: null,
        size: null,
        otherKeywords: [],
    };

    const words = text.split(/[\s,#]+/); // Split on spaces, hashtags, or commas
    words.forEach((word) => {
        const lowerWord = word.toLowerCase();

        if (lowerWord.includes("car") || lowerWord.includes("wallet") || lowerWord.includes("phone")) {
            attributes.type = lowerWord;
        } else if (lowerWord.startsWith("$") || lowerWord.match(/\d+(\.\d+)?/)) {
            attributes.price = lowerWord;
        } else if (["red", "blue", "black", "white", "green"].includes(lowerWord)) {
            attributes.color = lowerWord;
        } else if (["small", "medium", "large", "xl"].includes(lowerWord)) {
            attributes.size = lowerWord;
        } else {
            attributes.otherKeywords.push(word);
        }
    });

    return attributes;
}

// POST route to generate product description
router.post("/generate", (req, res) => {
    const { socialMediaText } = req.body;

    if (!socialMediaText) {
        return res.status(400).json({ error: "Social media text is required" });
    }

    const attributes = extractAttributesFromText(socialMediaText);
    const { type, price, color, size, otherKeywords } = attributes;

    // Generate description based on extracted attributes
    let description = "This is a product listing: ";
    if (type) description += `Type: ${type}. `;
    if (color) description += `Color: ${color}. `;
    if (size) description += `Size: ${size}. `;
    if (price) description += `Price: ${price}. `;
    if (otherKeywords.length) {
        description += `Additional Features: ${otherKeywords.join(", ")}.`;
    }

    return res.json({ description });
});

// Export the router
module.exports = router;


