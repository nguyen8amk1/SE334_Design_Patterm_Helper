import {Akinator} from './AkinatorComponent';
import {DesignPatternAnimation} from './DesignPatternAnimationComponent';

export default function QuizQuestionComponent({currentQuestion, handleAnswerSubmit}) {
    // TODO: display the questions inside a rectangle block like akinator
    // With animation on the left or right
    return (
        <div className="question">
            <div style={{
                width: '500px',
                height: '300px',
                backgroundColor: 'green',
                color: "white", 
                display: "flex",  
                flexDirection: "column",  
                alignItem: "center",  
                justifyContent: "center",  
            }}>{currentQuestion.question}</div>


            <DesignPatternAnimation style={{
                width: '300px',
                height: '300px',
                backgroundColor: 'green',
                color: "white", 
                display: "flex",  
                flexDirection: "column",  
                alignItem: "center",  
                justifyContent: "center",  
                position: 'absolute',  // Position absolutely for precise placement
                //top: '50px',    // Adjust top position
                top: '0px',    // Adjust top position
                left: '50px',  // Adjust right position
            }}/>

            <div className="btns">
                {currentQuestion.answers.map((answer, index) => (
                    <button className={answer == "YES" ? "btn green" : "btn red"}key={index} onClick={async () => await handleAnswerSubmit(answer)}>
                        {answer}
                    </button>
                ))}
            </div>

            <Akinator style={{
                // width: '250px',   // Adjust width as needed
                // height: '400px',  // Adjust height as needed
                // backgroundColor: '#3498db',  // Big blue rectangle color
                position: 'absolute',  // Position absolutely for precise placement
                top: '10px',    // Adjust top position
                right: '0px',  // Adjust right position
                color: "white",
            }}/>
        </div>
    );
}
