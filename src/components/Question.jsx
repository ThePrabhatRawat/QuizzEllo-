// src/components/Question.js
import React from 'react';
import { Button } from 'react-bootstrap';

function Question({ question, handleAnswerOptionClick }) {
  return (
    <div className="question-section">
      <h2>{question.questionText}</h2>
      <div className="answer-section">
        {question.answerOptions.map((option, index) => (
          <Button
            key={index}
            variant="primary"
            onClick={() => handleAnswerOptionClick(option.isCorrect)}
          >
            {option.answerText}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Question;
