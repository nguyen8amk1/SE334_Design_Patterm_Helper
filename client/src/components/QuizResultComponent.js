export default function QuizResultComponent() {
    return (
        <div>
            <h2>Quiz Complete!</h2>
            <p>Thank you for completing the quiz.</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
    );
}
