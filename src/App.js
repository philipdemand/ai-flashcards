import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FlashcardForm from "./components/FlashcardForm";
import FlashcardList from "./components/FlashcardList";

function App() {
  const [flashcards, setFlashcards] = useState(() => {
    const saved = localStorage.getItem("flashcards");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  const addFlashcard = (newCard) => {
    setFlashcards(prev => [...prev, newCard]);
  };

  return (
    <div className="container mt-4">
      <Header />
      <FlashcardForm addFlashcard={addFlashcard} />
      <FlashcardList 
        flashcards={flashcards} 
        setFlashcards={setFlashcards} 
      />
    </div>
  );
}

export default App;
