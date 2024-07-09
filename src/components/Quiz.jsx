// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import  questions  from '../components/questions.js';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledQuestions(shuffled.slice(0, 10));
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledQuestions(shuffled.slice(0, 10));
  };

  const handleBackToHomeClick = () => {
    history(-1);
  };

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>; // Optional: A loading indicator while questions are being shuffled
  }

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <p>You scored {score} out of {shuffledQuestions.length}</p>
          <div className="button-group">
            <button className="btn btn-secondary bg-transparent" onClick={handleRestartClick}>
              Back to Quiz
            </button>
            <button className="btn btn-secondary bg-transparent" onClick={handleBackToHomeClick}>
              Back to Home
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{shuffledQuestions.length}
          </div>
          {shuffledQuestions.length > 0 && (
            <Question
              question={shuffledQuestions[currentQuestion]}
              handleAnswerOptionClick={handleAnswerOptionClick}
            />
          )}
          <button className="btn btn-secondary bg-transparent" onClick={handleBackToHomeClick}>
              Back to Home
            </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
