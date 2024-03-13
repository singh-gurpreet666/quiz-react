import React from 'react'

const Result = ({Questions , Answers}) => {
  return (
    <div>
      <h2>Results:</h2>
      {/* {console.log(typeof(Questions))}
      {console.log(Questions)} */}
      {Questions && Questions.map((question, index) => (
        <div className='d-flex flex-column' key={index}>
          <p><strong>Question {index + 1}:</strong> {question.question}</p>
          <button className={question.correctAnswer===Answers[index]?'btn btn-success':Answers[index]?'btn btn-danger':'btn btn-warning'}><strong>Your Answer:</strong> {Answers[index]?Answers[index]:"Not Selected"}</button>
        <button className='btn btn-primary my-2'><strong>Correct Answer:</strong> {question.correctAnswer}</button>

          <hr />
        </div>
      ))}
    </div>


  )
}

export default Result
