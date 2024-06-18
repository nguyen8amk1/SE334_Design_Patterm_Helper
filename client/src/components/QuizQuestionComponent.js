import {Akinator} from './AkinatorComponent'

export default function QuizQuestionComponent({currentQuestion, handleAnswerSubmit}) {
    return (
        <div className="question">
            <h2>{currentQuestion.question}</h2>
            <div style={{
                width: '200px',
                height: '300px',
                backgroundColor: 'green',
                color: "white", 
            }}>Design pattern Animation</div>

            <div className="btns">
                {currentQuestion.answers.map((answer, index) => (
                    <button className={answer == "YES" ? "btn green" : "btn red"}key={index} onClick={async () => await handleAnswerSubmit(answer)}>
                        {answer}
                    </button>
                ))}
            </div>
            <Akinator/>
        </div>
    );
}
