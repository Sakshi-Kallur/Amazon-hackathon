import express from 'express';
import { OpenAI } from 'openai';

const router = express.Router();

// Set up OpenAI API key
const openai = new OpenAI({
  apiKey: 'your-api-key-here'  // Replace with your OpenAI API key
});

// Route to process social media post data
router.post('/process', async (req, res) => {
  try {
    const { socialMediaText } = req.body; // Extract social media text (caption, hashtags, etc.)

    // Generate a product description using OpenAI API
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `Convert this social media text into an Amazon product description: ${socialMediaText}` }],
      model: 'gpt-4',  // or use 'gpt-3.5-turbo'
    });

    const productDescription = response.choices[0].message.content;

    // Send the generated product description back to the frontend
    res.json({ productDescription });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the request');
  }
});

export default router;
