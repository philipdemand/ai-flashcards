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
  if (!topic) return res.status(400).json({ error: "No topic provided" });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a teacher creating study flashcards." },
        { role: "user", content: `Create one flashcard for: "${topic}". Respond in JSON: { "question": "...", "answer": "..." }` },
      ],
      temperature: 0.7,
    });

    const text = completion.choices[0].message.content;
    const jsonText = text.match(/\{[\s\S]*\}/)[0];
    const parsed = JSON.parse(jsonText);

    res.json(parsed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate flashcard" });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});