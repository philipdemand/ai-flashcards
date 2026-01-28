import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Flashcard = ({ flashcard, onDelete }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Card 
      className="mb-3 text-center"
      style={{ cursor: "pointer" }}
      onClick={() => setFlipped(!flipped)}
    >
      <Card.Body>
        <Card.Title>
          {flipped ? flashcard.answer : flashcard.question}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button 
          variant="danger" 
          size="sm" 
          onClick={(e) => {
            e.stopPropagation(); // prevent card flip when deleting
            onDelete(flashcard.id);
          }}
        >
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Flashcard;