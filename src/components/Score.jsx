// src/components/Score.js
import React from 'react';
import { Button } from 'react-bootstrap';

function Score({ score, total, onRestart }) {
  return (
    <div className="score-section">
      <h2>
        You scored {score} out of {total}
      </h2>
      <Button className='btn-secondary ' variant="secondary" onClick={onRestart}>
        Back to Question 1
      </Button>
    </div>
  );
}

export default Score;
