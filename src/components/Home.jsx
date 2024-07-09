// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      
      <div className="home-content">
        <div className="rules-section">
          <h3>Rules</h3>
          <ul>
            <li>Each quiz consists of 10 randomly selected questions.</li>
            <li>You have to select one correct answer out of four options.</li>
            <li>Remember, there’s no rush! You’re not defusing a bomb... or are you?</li>
            <li>Have fun and learn something new!</li>
          </ul>
        </div>
        <div className="humor-section">
          <h3>Lighten Up!</h3>
          <ul>
            <li>"Why don’t some couples go to the gym? Because some relationships don’t work out."</li>
            <li>"I told my computer I needed a break, and now it won’t stop sending me KitKat ads."</li>
            <li>"Why did the scarecrow win an award? Because he was outstanding in his field!"</li>
          </ul>
        </div>
      </div>
      <Link to="/quiz" className="btn text-light start-button">
        Start Quiz
      </Link>
      <footer>
        <p>Made by Prabhat Rawat, a MERN stack specialist and a part-time humorist.</p>
        <div className="social-links">
          <a href="https://github.com/ThePrabhatRawat" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.instagram.com/prabhatrawat35/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/prabhat-rawat-6619a2247/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
