import {Akinator} from './AkinatorComponent';
import {DesignPatternAnimation} from './DesignPatternAnimationComponent';
import {useState} from 'react';

export default function QuizQuestionComponent({currentQuestion, handleAnswerSubmit}) {
    // TODO: display the questions inside a rectangle block like akinator
    // With animation on the left or right
    //
    // TODO: This emotion should be a state machine as well 
    const [questionCounter, setQuestionCounter] = useState(0);

    const emotionMapping = ["Neutral", "Confident", "Confident", "Thinking"];


    const clamp = (min, num, max) => {
        if (num <= min) return min;
        if (num > max) return max;
        return num;
    }

    //console.log(emotionMapping[clamp(0, questionCounter, emotionMapping.length)]);
    //const emotion = "Neutral";
    const emotion = emotionMapping[clamp(0, questionCounter, emotionMapping.length-1)]
    console.log(emotion);

    const handleQuestionCounter = () => {
        setQuestionCounter(prevCounter => prevCounter + 1); // Increment questionCounter
    };

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
                        <button  className={answer == "YES" ? "btn green" : "btn red"}key={index} onClick={async () => { await handleAnswerSubmit(answer); handleQuestionCounter();}} >
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
                    //emotion={emotionMapping[questionCounter]}/>
                    //emotion={emotionMapping[0, clamp(questionCounter), emotionMapping.length]}/>
                    emotion={emotion}/>
            </div>


        </>

    );
}
