import {Akinator} from './AkinatorComponent';
import {DesignPatternAnimation} from './DesignPatternAnimationComponent';

export default function QuizQuestionComponent({currentQuestion, handleAnswerSubmit}) {
    // TODO: display the questions inside a rectangle block like akinator
    // With animation on the left or right
    //
    // TODO: This emotion should be a state machine as well 
    const emotionMapping = {
        10: "Neutral", 
        10: "Thinking", 
        10: "Confident", 
        10: "Happy", 
    };  // TODO: map a number to emotion string 

    const emotion = "Neutral";

    return (
        <>
            <div style={{
                padding: "2em",
            }}className="question">
                <h1 style={{
                    margin: 0,
                    marginBottom: '1em',
                }}className="logo-text">DESIGN PATTERN GUESSER</h1>
                <div style={{
                    width: '600px',
                    height: '500px',
                    backgroundColor: '#f6f8f8',
                    color: "black", 
                    display: "flex",  
                    flexDirection: "column",  
                    alignItem: "center",  
                    justifyContent: "center",  
                    fontSize: "1.5em",
                    whiteSpace: 'pre-line', 
                }}>{currentQuestion.question}</div>


                {/* <DesignPatternAnimation style={{ */}
                {/*     width: '300px', */}
                {/*     height: '300px', */}
                {/*     backgroundColor: 'green', */}
                {/*     color: "white",  */}
                {/*     display: "flex",   */}
                {/*     flexDirection: "column",   */}
                {/*     alignItem: "center",   */}
                {/*     justifyContent: "center",   */}
                {/*     position: 'absolute',  // Position absolutely for precise placement */}
                {/*     //top: '50px',    // Adjust top position */}
                {/*     top: '0px',    // Adjust top position */}
                {/*     left: '50px',  // Adjust right position */}
                {/* }}/> */}

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
                    top: '0px',    // Adjust top position
                    right: '70px',  // Adjust right position
                    color: "white",
                }}
                    emotion={emotion}/>
            </div>


        </>

    );
}
