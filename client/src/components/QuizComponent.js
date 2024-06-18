import React, { useState, useEffect } from 'react';
import QuizStartComponent from './QuizStartComponent';
import QuizResultComponent from './QuizResultComponent';
import QuizQuestionComponent from './QuizQuestionComponent';
import {DesignPatternEngine, graphFromJSON} from '../services/engine';
import {graphJSON} from '../services/brain';

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

const graph = graphFromJSON(graphJSON);
const engine = new DesignPatternEngine(graph, 0);

const getRandomQuestion = async () => {
    // const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    // return quizQuestions[randomIndex];
    const question = await engine.getNextQuestion()
    return {
        question: question, 
        answers: ["YES", "NO"],
    };
};

const QuizComponent = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [quizComplete, setQuizComplete] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);

    const fetchNextQuestion = async () => {
        if (engine.endGame()) {
            setQuizComplete(true);
        } else {
            const question = await getRandomQuestion();
            setCurrentQuestion(question);
        }
    };

    const handleAnswerSubmit = async (answer) => {
        engine.answer(answer);
        await fetchNextQuestion();
    };

    return (
        <div>
            {!quizStarted && <QuizStartComponent setQuizStarted={setQuizStarted} fetchNextQuestion={fetchNextQuestion}/>}
            {quizStarted && (quizComplete ? <QuizResultComponent/> : currentQuestion && <QuizQuestionComponent currentQuestion={currentQuestion} handleAnswerSubmit={handleAnswerSubmit}/>)}
        </div>
    );
};

export default QuizComponent;
