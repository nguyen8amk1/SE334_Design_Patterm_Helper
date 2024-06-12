class DesignPatternGuesserDatabase {
    // TODO: apply single responsibility on to these objects 
    // the starting point: the questions, answers
    
    // NOTE: core questions @Tuning
    static evidenceToQuestionMapping =  { 
        studiedMoreThan5Hours: "Do you studied more than 5 hours a day for this subject ?", 
        attendedAllClasses: "Do you attented all classes of this subject ?", 
        participatedInStudyGroups: "Are you in any particular study group ?",
    }; 

    // NOTE: core answers 1 
    static ANSWERS_ENUM = {
        YES: "Yes", 
        NO: "No", 
        DONT_KNOW: "Don't Know", 
        PROBABLY_YES: "Probably Yes", 
        PROBABLY_NO: "Probably No"
    };

    // NOTE: core answers 2 -> @Tuning 
    static answerValueMapping = {
        [this.ANSWERS_ENUM.YES]: 0.8,
        [this.ANSWERS_ENUM.NO]: 0.4,
        [this.ANSWERS_ENUM.DONT_KNOW]: .5,
        [this.ANSWERS_ENUM.PROBABLY_YES]: .7,
        [this.ANSWERS_ENUM.PROBABLY_NO]: .7,
    };

    static hypotheses = {  // TODO: @Tuning 
        likelyToPass: 0.3,
        moderateChance: 0.5,
        unlikelyToPass: 0.2
    };


    // TODO: the rest are dependencies 

    // TODO: likelihoods depends on hypotheses + questions 
    // We need to tuning the likelihood for each of the result with different set of answers
    // Maybe we just do it manually
    // @Tuning
    // There are at least 23*20 = 460 tuning values :)) 
    // Can we setup any kind of good system to autotune these values ?? 
    static likelihoods = {
        likelyToPass: { // NOTE: design pattern 
            // these are the questions
            studiedMoreThan5Hours: 0.9, // NOTE: questions
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
}

