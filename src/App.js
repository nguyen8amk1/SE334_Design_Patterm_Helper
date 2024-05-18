import logo from './logo.svg';
import './App.css';
import Quiz from 'react-quiz-component';
import {quiz} from './Quiz'

function App() {

    return (
        <div className="App">
            <Quiz quiz={quiz}/>
        </div>
    );
}

export default App;
