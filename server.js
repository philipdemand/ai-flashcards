const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/generate", async (req, res) => {
  const { topic } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates study flashcards."
        },
        {
          role: "user",
          content: `Generate 5 flashcards about "${topic}". 
Return ONLY valid JSON in this format:

[
  { "question": "...", "answer": "..." },
  { "question": "...", "answer": "..." }
]`
        }
      ]
    });

    const text = completion.choices[0].message.content;
    console.log("RAW AI RESPONSE:", text);

    const cards = JSON.parse(text);
    res.json(cards);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate cards" });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});