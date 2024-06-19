import logo from './logo.svg';
import './App.css';
//import Quiz from 'react-quiz-component';
//import {quiz} from './Quiz'
import QuizComponent from './components/QuizComponent';
import PseudoFactoryMethod from './components/PseudoCodes/FactoryMethod';

function App() {
    return (
        <div className="App">
            <QuizComponent/>
            {/* <PseudoFactoryMethod/> */}
        </div>
    );
}

export default App;
