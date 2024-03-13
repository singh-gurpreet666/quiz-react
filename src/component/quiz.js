
import React, { useState , useEffect} from 'react';
import questiondata from '../data.json';
import QuizQuestion from './QuizQuestion';
import { Link } from 'react-router-dom';
import Result from './Result';

const Data =questiondata.quiz

const SelectRandomQuestions = (category) => {
  const Questions = Data.filter(question => question.category === category);
  let uniqueNumbers = new Set();

  while (uniqueNumbers.size < 10) {
    const randomNum = Math.floor(Math.random() * Questions.length);
    uniqueNumbers.add(randomNum);
  }

uniqueNumbers = Array.from(uniqueNumbers);
// console.log(uniqueNumbers.length)
// console.log(uniqueNumbers)
  const ques = uniqueNumbers.map(element => Questions[element]);
  return ques;
};


const Quiz = (props) => {
  const category = props.category;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
  const [Questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(SelectRandomQuestions(category));
  }, [category]);

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
      setCurrentQuestion(currentQuestion + 1);
    
  };

  const handleAnswer = (selectedOption) => {
    // Update the selected answers array with the current selection
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    
    // Check if the selected option is correct and has changed from the previous selection
    if (
        selectedOption === Questions[currentQuestion].correctAnswer &&
        selectedOption !== selectedAnswers[currentQuestion]
        ) {
            setScore(score + 1);
        }else if(
            selectedOption !== Questions[currentQuestion].correctAnswer &&
            selectedAnswers[currentQuestion]===Questions[currentQuestion].correctAnswer
            ){
                            setScore(score - 1);

            }
        setSelectedAnswers(updatedAnswers);

    
  };
  return (
    <div className='container'>
      {currentQuestion < Questions.length ? (
        <>
        <QuizQuestion
          question={currentQuestion+1 +". "+ Questions[currentQuestion].question}
          options={Questions[currentQuestion].options}
          handleAnswer={handleAnswer}
          selectedAnswer={selectedAnswers[currentQuestion]}
          />
        <div className="container d-flex justify-content-between">
        <button disabled={currentQuestion === 0} type="button" className="btn btn-dark" onClick={handlePrevious}>
          &larr; Previous
        </button>

        {/* when reach last question show submit button in place of next button */}
        {currentQuestion < Questions.length-1 ? (
            <button
            //   disabled={currentQuestion === ques.length - 1}
            type="button"
            className="btn btn-dark"
            onClick={handleNext}
            >
          Next &rarr;
        </button>
      ) : (
          <button
          //   disabled={currentQuestion === ques.length - 1}
          type="button"
          className="btn btn-dark"
          onClick={handleNext}
          >
          Submit &rarr;
        </button>
      )}
      </div>
    </>
      ) : (<>
        <div className="quiz-completed ">
  <h2>Quiz completed!</h2>
  <p className="score-message">Your score: {score} / {Questions.length}</p>
</div>
<Result Questions={Questions} Answers={selectedAnswers} />
<div className="container d-flex justify-content-between">
        <button className="btn btn-primary" >
          <Link className="nav-link" to="/"><b>&larr; Home</b></Link>
        </button>
      </div>
      </>
      )}

    </div>
  );
};

export default Quiz;
