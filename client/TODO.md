Quiz app: https://github.com/sachinsaini4278/React-Quiz-App
    -> use thi them together 
Deploy the app on netlify

# DONE

# TODO

## THE SYSTEM CONSIST OF 2 PARTS
1. the learning part 
    -> multistep bayes 
2. the choosing question part 
    -> information entropy 
        -> shannon entropy




**CONNECT THE SYSTEM TO A UI** @Current
    -> 

**SETUP A TRAINING LOOP USING CHATGPT API TO TRAIN THE SYSTEM** @Next
    NEED TO FIGURE OUT HOW THE TRAINING LOOP GONNA WORK FIRST ?? 
    NEED TO SETUP KINDA LIKE AKINATOR TRAINING LOOP 

**VISUALIZE BAYESIAN THEOREM WITH A RECTANGLE, 
    BETTER WITH A HISTOGRAM THOUGH**

+ NOTE: 
    the list of questions should be intent-based, 
        -> easier to select a good one 

## 1. How the system works: 
1. Key components: 
    + 1. Design patterns
    + 2. Questions: 
        Questions asked to **GATHER CLUES ABOUT WHICH DESIGN PATTERN IS NEEDED**
    + 3. Answers
        + Yes
        + No
        + Don't know
        + Probably yes
        + Probably no

2. How the system works:
    + 1. Start with Equal chances:
        at the beginning, our system thinks all design patterns are equally likely to be the answer
            -> **Maybe apply these chances to the system: https://github.com/anonystick/learning-design-patterns**

    + 2. Ask a question: 
        System ask question to get more information

    + 3. Get the answer: 
        You response with an answer

    + 4. Update Knowledge:
        **Based on your answer, 
        the system UPDATES ITS UNDERSTANDING of:
            1. which design patterns are more likely 
            2. which are less likely to be the right answer**.

    + 5. Pick another question:
        that it thinks will be the most helpful in getting closer to the right answer  
        
3. Details: 
    There are 2 different process here: 
    1. Update the knowledge 
        -> Bayes theory 
        **UPDATING THE PROBABILITY DISTRIBUTION**

    2. Choosing the next questions
        -> Information Entropy
        




What's the flow that we want, steps:
    1. a question get prompted, with listed answer
    2. user select an answer
    3. if found a solution: 
        print the solution
    else 
    4. go to 1

+ Requirements: 
    Guess the design pattern correctly ??  
        -> Metrics:
            ...@Later 

+ Do a better work at the place holder code: 
    ...@Later
    
Setup the development environment [] (2h) 
    Create react app [X]
    make sure dev.sh working [X]
    make sure prod.h working [X] 

Put the Quiz App into place [X] 
    https://github.com/wingkwong/react-quiz-component?tab=readme-ov-file
