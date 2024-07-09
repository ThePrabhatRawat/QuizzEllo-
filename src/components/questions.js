// src/questions.js
const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "Berlin", isCorrect: false },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Lisbon", isCorrect: false },
    ],
  },
  {
    questionText: "Who wrote 'To Kill a Mockingbird'?",
    answerOptions: [
      { answerText: "Harper Lee", isCorrect: true },
      { answerText: "Mark Twain", isCorrect: false },
      { answerText: "Ernest Hemingway", isCorrect: false },
      { answerText: "F. Scott Fitzgerald", isCorrect: false },
    ],
  },
  {
    questionText: "What is the largest planet in our solar system?",
    answerOptions: [
      { answerText: "Earth", isCorrect: false },
      { answerText: "Mars", isCorrect: false },
      { answerText: "Jupiter", isCorrect: true },
      { answerText: "Saturn", isCorrect: false },
    ],
  },
  {
    questionText: "What is the speed of light?",
    answerOptions: [
      { answerText: "300,000 km/s", isCorrect: true },
      { answerText: "150,000 km/s", isCorrect: false },
      { answerText: "500,000 km/s", isCorrect: false },
      { answerText: "1,000,000 km/s", isCorrect: false },
    ],
  },
  {
    questionText: "Who painted the Mona Lisa?",
    answerOptions: [
      { answerText: "Vincent van Gogh", isCorrect: false },
      { answerText: "Pablo Picasso", isCorrect: false },
      { answerText: "Leonardo da Vinci", isCorrect: true },
      { answerText: "Claude Monet", isCorrect: false },
    ],
  },
  {
    questionText: "What is the powerhouse of the cell?",
    answerOptions: [
      { answerText: "Nucleus", isCorrect: false },
      { answerText: "Ribosome", isCorrect: false },
      { answerText: "Mitochondria", isCorrect: true },
      { answerText: "Chloroplast", isCorrect: false },
    ],
  },
  {
    questionText: "Who is known as the father of computers?",
    answerOptions: [
      { answerText: "Alan Turing", isCorrect: false },
      { answerText: "Charles Babbage", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Steve Jobs", isCorrect: false },
    ],
  },
  {
    questionText: "What is the main ingredient in traditional Japanese miso soup?",
    answerOptions: [
      { answerText: "Tofu", isCorrect: false },
      { answerText: "Miso paste", isCorrect: true },
      { answerText: "Seaweed", isCorrect: false },
      { answerText: "Rice", isCorrect: false },
    ],
  },
  {
    questionText: "What element does 'O' represent on the periodic table?",
    answerOptions: [
      { answerText: "Osmium", isCorrect: false },
      { answerText: "Oxygen", isCorrect: true },
      { answerText: "Gold", isCorrect: false },
      { answerText: "Silver", isCorrect: false },
    ],
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    answerOptions: [
      { answerText: "Venus", isCorrect: false },
      { answerText: "Mars", isCorrect: true },
      { answerText: "Jupiter", isCorrect: false },
      { answerText: "Saturn", isCorrect: false },
    ],
  },
  {
    questionText: "What is the chemical symbol for water?",
    answerOptions: [
      { answerText: "WO", isCorrect: false },
      { answerText: "H2O", isCorrect: true },
      { answerText: "HO", isCorrect: false },
      { answerText: "HHO", isCorrect: false },
    ],
  },
  {
    questionText: "Who wrote the play 'Romeo and Juliet'?",
    answerOptions: [
      { answerText: "Christopher Marlowe", isCorrect: false },
      { answerText: "William Shakespeare", isCorrect: true },
      { answerText: "Ben Jonson", isCorrect: false },
      { answerText: "John Webster", isCorrect: false },
    ],
  },
  {
    questionText: "What is the smallest prime number?",
    answerOptions: [
      { answerText: "0", isCorrect: false },
      { answerText: "1", isCorrect: false },
      { answerText: "2", isCorrect: true },
      { answerText: "3", isCorrect: false },
    ],
  },
  {
    questionText: "Which ocean is the largest?",
    answerOptions: [
      { answerText: "Atlantic", isCorrect: false },
      { answerText: "Indian", isCorrect: false },
      { answerText: "Pacific", isCorrect: true },
      { answerText: "Arctic", isCorrect: false },
    ],
  },
  {
    questionText: "What year did the Titanic sink?",
    answerOptions: [
      { answerText: "1905", isCorrect: false },
      { answerText: "1910", isCorrect: false },
      { answerText: "1912", isCorrect: true },
      { answerText: "1915", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital of Australia?",
    answerOptions: [
      { answerText: "Sydney", isCorrect: false },
      { answerText: "Melbourne", isCorrect: false },
      { answerText: "Canberra", isCorrect: true },
      { answerText: "Brisbane", isCorrect: false },
    ],
  },
  {
    questionText: "Which country is known as the Land of the Rising Sun?",
    answerOptions: [
      { answerText: "China", isCorrect: false },
      { answerText: "Japan", isCorrect: true },
      { answerText: "South Korea", isCorrect: false },
      { answerText: "Thailand", isCorrect: false },
    ],
  },
  {
    questionText: "What is the longest river in the world?",
    answerOptions: [
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Nile", isCorrect: true },
      { answerText: "Yangtze", isCorrect: false },
      { answerText: "Mississippi", isCorrect: false },
    ],
  },
  {
    questionText: "What is the hardest natural substance on Earth?",
    answerOptions: [
      { answerText: "Gold", isCorrect: false },
      { answerText: "Iron", isCorrect: false },
      { answerText: "Diamond", isCorrect: true },
      { answerText: "Platinum", isCorrect: false },
    ],
  },
  {
    questionText: "Who was the first person to walk on the moon?",
    answerOptions: [
      { answerText: "Buzz Aldrin", isCorrect: false },
      { answerText: "Yuri Gagarin", isCorrect: false },
      { answerText: "Neil Armstrong", isCorrect: true },
      { answerText: "Michael Collins", isCorrect: false },
    ],
  },
  {
    questionText: "What is the primary function of the CPU in a computer?",
    answerOptions: [
      { answerText: "Store data", isCorrect: false },
      { answerText: "Execute instructions", isCorrect: true },
      { answerText: "Manage power", isCorrect: false },
      { answerText: "Handle input/output operations", isCorrect: false },
    ],
  },
  {
    questionText: "What is the boiling point of water at sea level?",
    answerOptions: [
      { answerText: "50°C", isCorrect: false },
      { answerText: "75°C", isCorrect: false },
      { answerText: "100°C", isCorrect: true },
      { answerText: "125°C", isCorrect: false },
    ],
  },
  {
    questionText: "Who wrote 'Hamlet'?",
    answerOptions: [
      { answerText: "Charles Dickens", isCorrect: false },
      { answerText: "Mark Twain", isCorrect: false },
      { answerText: "William Shakespeare", isCorrect: true },
      { answerText: "Jane Austen", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital city of Japan?",
    answerOptions: [
      { answerText: "Kyoto", isCorrect: false },
      { answerText: "Osaka", isCorrect: false },
      { answerText: "Tokyo", isCorrect: true },
      { answerText: "Hiroshima", isCorrect: false },
    ],
  },
  {
    questionText: "Which planet is closest to the sun?",
    answerOptions: [
      { answerText: "Venus", isCorrect: false },
      { answerText: "Earth", isCorrect: false },
      { answerText: "Mars", isCorrect: false },
      { answerText: "Mercury", isCorrect: true },
    ],
  },
  {
    questionText: "What is the chemical symbol for gold?",
    answerOptions: [
      { answerText: "Go", isCorrect: false },
      { answerText: "Au", isCorrect: true },
      { answerText: "Ag", isCorrect: false },
      { answerText: "Pt", isCorrect: false },
    ],
  },
];

export default questions;
