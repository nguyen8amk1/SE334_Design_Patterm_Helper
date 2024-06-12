const questions = []; 
const designPatterns = [];
const answers = []; 

// TODO: let's do something small first
// version 1: 
    // 1 question
    // 2 answers
    // 3 patterns

// TODO: 
// version 2: 
    // 2 questions
    // 2 answers
    // 5 patterns

// TODO: 
// version 3: 
    // 5 questions
    // 5 answers
    // 5 patterns



// TODO: we need to define 2 steps:
// 1. update the overallknowledge @Current
// how the updating works:
//  use **CONDITIONAL PROBABILITIES** and update beliefs as new information becomes available.

// 2. determine the next question in the designPatternsLikelyHood

/*
const overallknowledge = ;
    -> the overalll probablity distribution
const thefinalanswer = ;
    -> the tip of the distribution, MLE - maximum likelyhood esitmation

the evidence_i value is the value of the chosen answer in each 

const designPatternsLikelyHood = [ 
    question A: { // each of these questions can be visualized as a rectangle
        answer a: {
            design pattern A:, 
            design pattern B:, 
        }, 
        answer b: {
            design pattern A:, 
            design pattern B:, 
        }, 
        answer c: {
            design pattern A:, 
            design pattern B:, 
        }, 
    }, 

    question B: { // each of these questions can be visualized as a rectangle
        answer a: {
            design pattern A:, 
            design pattern B:, 
        }, 
        answer b: {
            design pattern A:, 
            design pattern B:, 
        }, 
        answer c: {
            design pattern A:, 
            design pattern B:, 
        }, 
    }, 

];
*/

/* NOTE:
// Each question have a catersian product of design patterns and possible answers
    // hypothesis A: design patterns 
    // evidence B: the answers
    // what we need to calulate for each question: 
        // given answer B what's the probablity that the design pattern is A 
        // -> P(A|B)
    // what we need to predefined for each question: 
        // P(B|A)
        // P(A)
        // P(B)
    Considering each question is a rectangle   
        the columns are the possible answers 
        the rows are the possible design patterns 
*/
