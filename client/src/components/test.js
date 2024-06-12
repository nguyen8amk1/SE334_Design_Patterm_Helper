// NOTE: THIS IS HAVE OF THE SYSTEM
// Define hypotheses and their prior probabilities
const hypotheses = {
    likelyToPass: 0.3,
    moderateChance: 0.5,
    unlikelyToPass: 0.2
};


// Define likelihoods for each hypothesis and evidence
const likelihoods = {
    likelyToPass: {
        // these are the questions
        studiedMoreThan5Hours: 0.9, 
        attendedAllClasses: 0.8, 
        participatedInStudyGroups: 0.7
    },
    moderateChance: {
        studiedMoreThan5Hours: 0.7,
        attendedAllClasses: 0.6,
        participatedInStudyGroups: 0.5
    },
    unlikelyToPass: {
        studiedMoreThan5Hours: 0.4,
        attendedAllClasses: 0.3,
        participatedInStudyGroups: 0.2
    }
};

// Function to calculate posterior probability for each hypothesis given evidence
function calculatePosterior(hypothesis, evidence) {
    const prior = hypotheses[hypothesis];
    let likelihood = 1; // Initialize likelihood as 1
    for (const ev in evidence) {
        likelihood *= likelihoods[hypothesis][ev];
    }
    const posterior = (prior * likelihood);
    return posterior;
}

// Function to find the most likely hypothesis given evidence
function findMostLikelyHypothesis(evidence) {
    let maxPosterior = -1;
    let mostLikelyHypothesis = null;

    // Iterate through hypotheses and calculate posterior probabilities
    for (const hypothesis in hypotheses) {
        const posterior = calculatePosterior(hypothesis, evidence);
        console.log(hypothesis, posterior);
        if (posterior > maxPosterior) {
            maxPosterior = posterior;
            mostLikelyHypothesis = hypothesis;
        }
    }

    return mostLikelyHypothesis;
}

// NOTE: mapping of likelyhood values
// Each evidence can have 1 of 5 values: 
    // Yes: .8
    // No: .4
    // Don't know: .5
    // Probably Yes: .7
    // Probably No:  .7


// TODO: write a ui system to ask questions, the output of the system will be the evidence 
// Evidence


const getEvidenceFromUser = () => {
    const ANSWERS_ENUM = {
        YES: "Yes", 
        NO: "No", 
        DONT_KNOW: "Don't Know", 
        PROBABLY_YES: "Probably Yes", 
        PROBABLY_NO: "Probably No"
    };

    const answerValueMapping = {
        [ANSWERS_ENUM.YES]: 0.8,
        [ANSWERS_ENUM.NO]: 0.4,
        [ANSWERS_ENUM.DONT_KNOW]: .5,
        [ANSWERS_ENUM.PROBABLY_YES]: .7,
        [ANSWERS_ENUM.PROBABLY_NO]: .7,
    };

    const evidenceToQuestionMapping =  {
        studiedMoreThan5Hours: "Do you studied more than 5 hours a day for this subject ?", 
        attendedAllClasses: "Do you attented all classes of this subject ?", 
        participatedInStudyGroups: "Are you in any particular study group ?",
    }; 

    // NOTE: THIS IS THE QUESTION RENDERING PART 
    // TURN THIS INTO A STATE MACHINE SO THAT IT INDEPENDENT FROM THE UI OR ANY RENDERING
    // FROM THIS TIL END
    const evidence = {};

    for(const evkey in evidenceToQuestionMapping) {
        const question = evidenceToQuestionMapping[evkey];
        console.log(question);

        let answerIndex = 1;
        let answerStringList = "";
        for(const anskey in ANSWERS_ENUM) {
            const answer = ANSWERS_ENUM[anskey];
            answerStringList += `${answerIndex}.${answer}\n`;
            answerIndex++;
        }

        console.log(answerStringList);

        // TODO: wait for user to input the answer 
        // ...@Later

        const userAnswer = ANSWERS_ENUM.YES;

        evidence[evkey] = answerValueMapping[userAnswer];
    }

    return evidence; 
}

const CLICollectingEvidence = () => {
}

const evidence = getEvidenceFromUser(); // NOTE: this part should be rewrite into UI 
console.log(evidence);


// Find the most likely hypothesis given the evidence
const mostLikelyHypothesis = findMostLikelyHypothesis(evidence);
console.log("Most likely hypothesis given evidence:", mostLikelyHypothesis);






// TODO: IMPLEMENT THE INFORMATION ENTROPY SYSTEM 
// TO NARROW DOWN THE AMOUNT OF QUESTIONS FOR USER TO ANSWERS
