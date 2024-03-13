import React, { useState } from 'react';
import '../App.css'; // Import the CSS file

const QuizQuestion = ({ question, options, handleAnswer,selectedAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleAnswer(option);
  };
  return (
    <div className="quiz-question-container">
      <h2 className="quiz-question">{question}</h2>
      <div className="options-container d-flex mb-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`quiz-option ${selectedAnswer === option||selectedOption===option ? 'selected' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;

