import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards, setFlashcards }) => {
  const handleDelete = (id) => {
    const updated = flashcards.filter(card => card.id !== id);
    setFlashcards(updated);
  };

  if (flashcards.length === 0) {
    return <p className="text-center">No flashcards yet. Add one above!</p>;
  }

  return (
    <div>
      {flashcards.map((card) => (
        <Flashcard 
          key={card.id} 
          flashcard={card} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
};

export default FlashcardList;