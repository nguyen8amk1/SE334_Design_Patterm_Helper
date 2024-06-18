import React, { useState, useEffect } from 'react';

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
    },
    {
        question: "done",
        answers: [],
    }
];

const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    return quizQuestions[randomIndex];
};

const QuizComponent = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [quizComplete, setQuizComplete] = useState(false);

    useEffect(() => {
        fetchNextQuestion();
    }, []);

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
            {quizComplete ? renderResult() : currentQuestion && renderQuestion()}
        </div>
    );
};

export default QuizComponent;
