import React, { useState } from "react";
import axios from "axios";

const FlashcardForm = ({ addFlashcard }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question && !topic) return;

    if (topic) {
      generateAIFlashcard(topic);
    } else {
      addFlashcard({ question, answer, id: Date.now() });
      setQuestion("");
      setAnswer("");
    }
  };

  const generateAIFlashcard = async (topic) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/generate`,
        { topic }
      );

    const cards = response.data;

    cards.forEach((card) => {
      addFlashcard({
        id: Date.now() + Math.random(),
        question: card.question,
        answer: card.answer,
      });
    });

    setTopic("");
  } catch (err) {
    console.error(err);
    alert("Failed to generate flashcards. Try again.");
  }

  setLoading(false);
};

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Topic (for AI-generated flashcard)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" disabled={loading} type="submit">
        {loading ? "Generating..." : "Add Flashcard"}
      </button>
    </form>
  );
};

export default FlashcardForm;