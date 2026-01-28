import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Flashcard = ({ flashcard, onDelete }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Card
      className="mb-3 text-center shadow-sm rounded"
      style={{ cursor: "pointer", transition: "transform 0.2s" }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
    <Card.Body>
    <Card.Title style={{ fontWeight: "600", fontSize: "1.2rem" }}>
      {flipped ? flashcard.answer : flashcard.question}
    </Card.Title>
    </Card.Body>

    <Card.Footer>
    <Button
      variant="danger"
      size="sm"
      onClick={(e) => {
        e.stopPropagation();
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