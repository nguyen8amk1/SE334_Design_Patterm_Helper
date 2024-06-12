export class BayesianGuessingGame {
    constructor() {
        this.objects = []; // List of possible objects
        this.questions = []; // List of possible questions
        this.data = {}; // Count of answers for each object and question
        this.priors = {}; // Prior probabilities
    }

    addObject(obj) {
        this.objects.push(obj);
        this.priors[obj] = 1 / this.objects.length;
        this.data[obj] = {};
    }

    addQuestion(question) {
        this.questions.push(question);
        for (const obj of this.objects) {
            this.data[obj][question] = { yes: 1, no: 1, idk: 1, 'n/a': 1 }; // Initial counts with Laplace smoothing
        }
    }

    updateData(obj, question, answer) {
        this.data[obj][question][answer] += 1;
    }

    calculateLikelihood(obj, question, answer) {
        const total = Object.values(this.data[obj][question]).reduce((a, b) => a + b, 0);
        return this.data[obj][question][answer] / total;
    }

    calculatePosterior(responses) {
        const posteriors = {};
        for (const obj of this.objects) {
            let posterior = this.priors[obj];
            for (const question in responses) {
                const answer = responses[question];
                const likelihood = this.calculateLikelihood(obj, question, answer);
                posterior *= likelihood;
            }
            posteriors[obj] = posterior;
        }
        const total = Object.values(posteriors).reduce((a, b) => a + b, 0);
        for (const obj in posteriors) {
            posteriors[obj] /= total;
        }
        return posteriors;
    }

    calculateEntropy(distribution) {
        return -Object.values(distribution).reduce((sum, p) => sum + (p > 0 ? p * Math.log(p) : 0), 0);
    }

    selectBestQuestion(responses) {
        let minExpectedEntropy = Infinity;
        let bestQuestion = null;
        for (const question of this.questions) {
            if (responses[question]) continue;

            let expectedEntropy = 0;
            const possibleAnswers = ['yes', 'no', 'idk', 'n/a'];
            for (const answer of possibleAnswers) {
                const newResponses = { ...responses, [question]: answer };
                const posteriors = this.calculatePosterior(newResponses);
                const entropy = this.calculateEntropy(posteriors);
                const probabilityOfAnswer = this.objects.reduce((sum, obj) => sum + this.calculateLikelihood(obj, question, answer) * this.priors[obj], 0);
                expectedEntropy += probabilityOfAnswer * entropy;
            }

            if (expectedEntropy < minExpectedEntropy) {
                minExpectedEntropy = expectedEntropy;
                bestQuestion = question;
            }
        }
        return bestQuestion;
    }

    async playGame() {
        const responses = {};
        while (true) {
            const bestQuestion = this.selectBestQuestion(responses);
            if (!bestQuestion) break;

            const answer = await this.getUserResponse(bestQuestion);
            responses[bestQuestion] = answer;

            const posteriors = this.calculatePosterior(responses);
            const bestGuess = Object.keys(posteriors).reduce((a, b) => posteriors[a] > posteriors[b] ? a : b);
            if (posteriors[bestGuess] > 0.8) { // Confidence threshold
                console.log(`My guess is: ${bestGuess}`);
                break;
            }
        }
        for (const question in responses) {
            this.updateData(bestGuess, question, responses[question]);
        }
    }

    async getUserResponse(question) {
        // Function to get user response, replace this with actual input handling code
        return new Promise((resolve) => {
            const answer = prompt(`${question} (yes/no/idk/n/a):`).trim().toLowerCase();
            resolve(answer);
        });
    }
}
