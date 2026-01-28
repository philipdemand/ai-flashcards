import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: "No topic provided" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert teacher creating study flashcards.",
        },
        {
          role: "user",
          content: `Create one flashcard for the topic: "${topic}". Provide JSON: { "question": "...", "answer": "..." }`,
        },
      ],
      temperature: 0.7,
    });

    const text = completion.choices[0].message.content;

    // Try to parse the JSON returned by GPT
    const parsed = JSON.parse(text.replace(/```json/g, "").replace(/```/g, "").trim());

    res.status(200).json(parsed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate flashcard" });
  }
}