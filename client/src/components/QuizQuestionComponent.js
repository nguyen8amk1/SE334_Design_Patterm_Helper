export default function QuizQuestionComponent({currentQuestion, handleAnswerSubmit}) {
    return (
        <div>
            <h2>{currentQuestion.question}</h2>
            {currentQuestion.answers.map((answer, index) => (
                <button key={index} onClick={() => handleAnswerSubmit(answer)}>
                    {answer}
                </button>
            ))}
        </div>
    );
}
