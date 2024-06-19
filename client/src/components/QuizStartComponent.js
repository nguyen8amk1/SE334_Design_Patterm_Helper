import ImageCropper from './ImageCropper';

export default function QuizStartComponent({setQuizStarted, fetchNextQuestion}) {
    const startQuiz = () => {
        setQuizStarted(true);
        fetchNextQuestion();
    };

    const style={
        display: "flex", 
        flexDirection: 'column', 
        alignItems: "center",
        position: "relative", 
    };

    const textStyle={
        position: "absolute",
        zIndex:100, 
        fontSize: "5em",
        top: "5em"
    };

    return (
        <div style={style}>
            <h2 className="logo-text" style={textStyle}>DESIGN PATTERN GUESSER</h2>
            <ImageCropper
            src={"/akinatorstartscreen_1.jpg"}
            alt="Image to crop"
            x={0}
            y={0}
            width={713}
            height={580}
            invertVerticalAxis={true}/>
            <button className="btn green" onClick={startQuiz}>Start Quiz</button>
        </div>
    );
}
