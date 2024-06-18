import React, { useState, useEffect } from 'react';

// Sample quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "done",
        answers: [],
        correctAnswer: ""
    }
];

const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    return quizQuestions[randomIndex];
};

const QuizComponent = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [quizComplete, setQuizComplete] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
        fetchNextQuestion();
    };

    const fetchNextQuestion = () => {
        const question = getRandomQuestion();
        if (question.question === "done") {
            setQuizComplete(true);
        } else {
            setCurrentQuestion(question);
        }
    };

    const handleAnswerSubmit = (answer) => {
        fetchNextQuestion();
    };

    const renderStartScreen = () => (
        <div>
            <h2>Welcome to the Quiz!</h2>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );

    const renderQuestion = () => (
        <div>
            <h2>{currentQuestion.question}</h2>
            {currentQuestion.answers.map((answer, index) => (
                <button key={index} onClick={() => handleAnswerSubmit(answer)}>
                    {answer}
                </button>
            ))}
        </div>
    );

    const renderResult = () => (
        <div>
            <h2>Quiz Complete!</h2>
            <p>Thank you for completing the quiz.</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
    );

    return (
        <div>
            {!quizStarted && renderStartScreen()}
            {quizStarted && (quizComplete ? renderResult() : currentQuestion && renderQuestion())}
        </div>
    );
};

export default QuizComponent;

