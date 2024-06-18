export default function QuizResultComponent({result}) {
    return (
        <div>
            <h2>I have concluded my final answer to your problem</h2>
            <p>{result}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
    );
}
