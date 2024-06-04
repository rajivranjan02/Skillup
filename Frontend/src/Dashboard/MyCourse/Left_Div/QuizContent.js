import React, { useState } from 'react';
import '../mycourse_style/quizContent.css';

function QuizContent() {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      text: "What is Data Science?",
      options: [
        { id: 0, text: "The study of collecting, analyzing, and interpreting large datasets to extract insights", isCorrect: true },
        { id: 1, text: "A programming language commonly used in data analysis", isCorrect: false },
        { id: 2, text: "A type of computer science focused on algorithms and data structures", isCorrect: false },
        { id: 3, text: "The process of designing user interfaces for data visualization", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of data preprocessing in data science?",
      options: [
        { id: 0, text: "To remove outliers from the dataset", isCorrect: false },
        { id: 1, text: "To transform raw data into a format suitable for analysis", isCorrect: true },
        { id: 2, text: "To perform statistical analysis on the dataset", isCorrect: false },
        { id: 3, text: "To visualize data using charts and graphs", isCorrect: false },
      ],
    },
    {
      text: "Which programming language is widely used for data analysis and machine learning?",
      options: [
        { id: 0, text: "Java", isCorrect: false },
        { id: 1, text: "Python", isCorrect: true },
        { id: 2, text: "C++", isCorrect: false },
        { id: 3, text: "JavaScript", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of regression analysis in data science?",
      options: [
        { id: 0, text: "To classify data into categories", isCorrect: false },
        { id: 1, text: "To predict numerical values based on historical data", isCorrect: true },
        { id: 2, text: "To visualize data using scatter plots", isCorrect: false },
        { id: 3, text: "To analyze relationships between variables", isCorrect: false },
      ],
    },
    {
      text: "What is the term used to describe the process of finding patterns and relationships in data?",
      options: [
        { id: 0, text: "Data exploration", isCorrect: true },
        { id: 1, text: "Data modeling", isCorrect: false },
        { id: 2, text: "Data validation", isCorrect: false },
        { id: 3, text: "Data visualization", isCorrect: false },
      ],
    },
    {
      text: "What is the primary goal of supervised learning in machine learning?",
      options: [
        { id: 0, text: "To make predictions from data", isCorrect: true },
        { id: 1, text: "To identify patterns in unlabeled data", isCorrect: false },
        { id: 2, text: "To generate new data samples", isCorrect: false },
        { id: 3, text: "To visualize high-dimensional data", isCorrect: false },
      ],
    },
    {
      text: "In data science, what does the term 'overfitting' refer to?",
      options: [
        { id: 0, text: "The model performs well on training data but poorly on new data", isCorrect: false },
        { id: 1, text: "The model captures noise and irrelevant information from the training data", isCorrect: true },
        { id: 2, text: "The model is too simple to capture the underlying patterns in the data", isCorrect: false },
        { id: 3, text: "The model has too many features for the given dataset", isCorrect: false },
      ],
    },
    {
      text: "What is the difference between supervised and unsupervised learning?",
      options: [
        { id: 0, text: "Supervised learning requires labeled data, while unsupervised learning does not", isCorrect: true },
        { id: 1, text: "Supervised learning involves regression, while unsupervised learning involves classification", isCorrect: false },
        { id: 2, text: "Supervised learning is used for clustering, while unsupervised learning is used for regression", isCorrect: false },
        { id: 3, text: "There is no difference; they are two terms for the same process", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of cross-validation in machine learning?",
      options: [
        { id: 0, text: "To divide data into training and testing sets", isCorrect: false },
        { id: 1, text: "To evaluate the performance of a model on multiple subsets of data", isCorrect: true },
        { id: 2, text: "To combine multiple models into an ensemble", isCorrect: false },
        { id: 3, text: "To visualize the relationship between variables", isCorrect: false },
      ],
    },
    {
      text: "What is a decision tree in machine learning?",
      options: [
        { id: 0, text: "A graphical representation of data using nodes and branches", isCorrect: true },
        { id: 1, text: "A mathematical formula used to model continuous data", isCorrect: false },
        { id: 2, text: "A method for reducing the dimensionality of data", isCorrect: false },
        { id: 3, text: "A technique for clustering similar data points", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (option) => {
    setSelectedOption(option.id);

    if (option.isCorrect) {
      setScore(score + 1);
      setAlertType('correct');
    } else {
      setAlertType('incorrect');
    }

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setSelectedOption(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowFinalResults(true);
      }
    }, 2000);
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResults(false);
    setShowAlert(false);
  };

  return (
    <div className='Quiz_app'>
      <h1>QUIZ PRACTICE</h1>
      <h2>Current Score : {score}</h2>

      {showFinalResults ? (
        <div className='final_results'>
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
          <button onClick={restartGame}>Restart Quiz</button>
        </div>
      ) : (
        <div className='question_card'>
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className='question_text'>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li
                className={`question_card_li ${selectedOption === option.id ? (option.isCorrect ? 'correct' : 'incorrect') : ''}`}
                onClick={() => optionClicked(option)}
                key={option.id}
              >
                {option.text}
              </li>
            ))}
          </ul>
          {showAlert && (
            <div className={`alert ${alertType}`}>
              {alertType === 'correct' ? 'Correct Answer!' : 'Incorrect Answer!'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizContent;
