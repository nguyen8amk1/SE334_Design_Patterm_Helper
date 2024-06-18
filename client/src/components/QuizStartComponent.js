export default function QuizStartComponent({setQuizStarted, fetchNextQuestion}) {
    const startQuiz = () => {
        setQuizStarted(true);
        fetchNextQuestion();
    };

    return (
        <div>
            <h2>Welcome to the Quiz!</h2>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
}