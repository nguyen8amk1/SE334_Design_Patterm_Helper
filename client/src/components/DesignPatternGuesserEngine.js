class DesignPatternGuesserEngine {
    constructor() {
        // TODO: these "need tweaking" information need to be in the brain 
        this.ANSWERS_ENUM = {
            YES: "Yes", 
            NO: "No", 
            DONT_KNOW: "Don't Know", 
            PROBABLY_YES: "Probably Yes", 
            PROBABLY_NO: "Probably No"
        };

        this.answerValueMapping = {
            [this.ANSWERS_ENUM.YES]: 0.8,
            [this.ANSWERS_ENUM.NO]: 0.4,
            [this.ANSWERS_ENUM.DONT_KNOW]: .5,
            [this.ANSWERS_ENUM.PROBABLY_YES]: .7,
            [this.ANSWERS_ENUM.PROBABLY_NO]: .7,
        };

        this.evidenceToQuestionMapping =  {
            studiedMoreThan5Hours: "Do you studied more than 5 hours a day for this subject ?", 
            attendedAllClasses: "Do you attented all classes of this subject ?", 
            participatedInStudyGroups: "Are you in any particular study group ?",
        }; 

        //this.evKeys = Object.keys(this.evidenceToQuestionMapping);
        this.questionList = Object.values(this.evidenceToQuestionMapping);

        this.init();
    }

    init() {
        this.questionIndex = 0;
        this.evidence = {};
        this.done = false;
    }

    done() {
        return this.done;
    }

    nextQuestion() {
        // TODO: should we block the system if the current question haven't been answered ? 
        if(this.questionIndex < this.questionList.length) {
            const answers = Object.values(this.ANSWERS_ENUM);
            //const question = this.evidenceToQuestionMapping[evKeys[this.questionIndex]];
            const question = this.questionList[this.questionIndex];
            this.questionIndex++;
            return {question: question, possibleAnswers: answers};
        } else {
            this.done = true;
            return -1;
        }
    }

    answerCurrentQuestion(answerIndex) {
        // TODO: turn the answer into evidence value and add it to the evidence object 
    }


    // Function to calculate posterior probability for each hypothesis given evidence
    _calculatePosterior(hypothesis, evidence) {
        const prior = hypotheses[hypothesis];
        let likelihood = 1; // Initialize likelihood as 1
        for (const ev in evidence) {
            likelihood *= likelihoods[hypothesis][ev];
        }
        const posterior = (prior * likelihood);
        return posterior;
    }

    // Function to find the most likely hypothesis given evidence
    _findMostLikelyHypothesis(evidence) {
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


    result() {
        if(!this.done) return "The show haven't done yet";
        return this._findMostLikelyHypothesis(this.evidence);
    }
}


const designPatternGuesser = new DesignPatternGuesser();
designPatternGuesser.init();
console.log(designPatternGuesser.nextQuestion());
console.log(designPatternGuesser.nextQuestion());
console.log(designPatternGuesser.nextQuestion());
console.log(designPatternGuesser.nextQuestion());
console.log(designPatternGuesser.nextQuestion());
console.log(designPatternGuesser.nextQuestion());
