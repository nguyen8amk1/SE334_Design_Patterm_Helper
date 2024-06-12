const questions = []; 
const designPatterns = [];
const answers = []; 
// TODO: we need to define 2 steps:
// 1. update the overallknowledge
// 2. determine the next question in the designPatternsLikelyHood

/*
const overallknowledge = ;
const designPatternsLikelyHood = [
    question A: { // each of these questions can be visualized as a rectangle
        design pattern A: {
            answer a: , 
            answer b: ,
            answer c: ,
            answer d: ,
            answer e: ,
        }, 
        design pattern B: {
            answer a: , 
            answer b: ,
            answer c: ,
            answer d: ,
            answer e: ,
        }
    }, 
    question A: {
        design pattern A: {
            answer a: , 
            answer b: ,
            answer c: ,
            answer d: ,
            answer e: ,
        }, 
        design pattern B: {
            answer a: , 
            answer b: ,
            answer c: ,
            answer d: ,
            answer e: ,
        }
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
