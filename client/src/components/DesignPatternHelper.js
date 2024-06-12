import {BayesianGuessingGame} from "./BayesianGuessingGame";

export function setupDesignPatternHelper() {
    const akinator = new BayesianGuessingGame();
    
    // TODO: set up everything in here 
    // Add objects (Replace with topic-specific objects)
    akinator.addObject('Barack Obama');
    akinator.addObject('Brad Pitt');
    
    // Add questions (Replace with topic-specific questions)
    akinator.addQuestion('Is your character a politician?');
    akinator.addQuestion('Is your character an actor?');
    
    return akinator;
}

// const designPatternHelper = setupDesignPatternHelper();
// designPatternHelper.playGame();

function setupAnimalGuesser() {
    const animalGuesser = new BayesianGuessingGame();
    
    // Add animals
    animalGuesser.addObject('Lion');
    animalGuesser.addObject('Elephant');
    animalGuesser.addObject('Penguin');
    animalGuesser.addObject('Kangaroo');
    
    // Add questions
    animalGuesser.addQuestion('Does it live in the jungle?');
    animalGuesser.addQuestion('Is it a mammal?');
    animalGuesser.addQuestion('Can it fly?');
    animalGuesser.addQuestion('Is it known for its jumping ability?');
    
    return animalGuesser;
}

const animalGuesser = setupAnimalGuesser();
animalGuesser.playGame();
