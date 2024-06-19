Quiz app: https://github.com/sachinsaini4278/React-Quiz-App
    -> use thi them together 
Deploy the app on netlify


# TODO
Use proper questions [X] (1h)
Make the question sound more pleasant [] (1h) @Later
Make the high level questions transition better (i got failed a lot) [] (1h) @Later

Make better ui [] (2h)
    This one looks great: https://codepen.io/about7codes/pen/rNWmGNW
    Make design pattern animation and akinator sprite relative to the question [X] 
    Make the questions block looks better [] 
    Make better start page [] (2h) [X]
        With akinator in the front page  
        With text  
        reference: https://game24h.vn/huong-dan/wp-content/uploads/2021/04/Screenshot_15_1617783693.jpg
            **LIKE THIS IMAGE BUT WITH TEXT AS "DESIGN PATTERN GUESSER"**

    Make better result page [] (2h) 
        reference: https://imgt.taimienphi.vn/cf/Images/lo/2018/2/23/cach-choi-akinator-game-than-den-doan-suy-nghi-3.jpg
        What we need to show, stub: 
            1. An UML Diagram in the top middle [X] 
            2. A block of answer in the  bottom middle [X]
            3. An akinator on the right (exactly the place before) [X]
            4. A retry button in the bottom [X]
                We will change to yes no in the next iteration 
            5. The pseudo code on the left [X]

        Collect the result information []
            pseudo code [] @Later
            uml diagram [X] 
                Connect the uml diagram to the ui [] 
                    Put the image link into the node [X] 
                        put into the action [X]
                    Render the image in the ui [X]

        with the image as the UML diagram from refactoring guru (https://refactoring.guru/images/patterns/diagrams/abstract-factory/example.png)
        pseudo code on the right side 

    Make better question and answer block [X] 

    Make better questions [] @Current
        reference: https://preview.redd.it/eyiqu9l3n6p81.png?width=1790&format=png&auto=webp&s=20d0d94635fea4d6dc4410c381ff8ae66f92e699

    Adding emotion system to the akinator [] @Next

Make the questions visualization animations gifs [] @Later
    reference: https://opensource.com/article/19/7/understanding-software-design-patterns
    

## Design pattern exercise to test the system
https://opencoursehub.cs.sfu.ca/bfraser/grav-cms/cmpt373/exercises/design_pattern_exercise
https://github.com/ZapDos7/design-patterns-examples?tab=readme-ov-file#exercise-1

(this is not exercise but very good source) https://ase.in.tum.de/lehrstuhl_1/files/teaching/ws0607/Software%20Engineering%20I/L13_DesignPatterns.pdf
    https://www.gofpattern.com/design-patterns/module7/how-to-choose-designPattern.php


## THE SYSTEM CONSIST OF 2 PARTS
1. the learning part 
    -> multistep bayes 
2. the choosing question part 
    -> information entropy 
        -> shannon entropy

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

CONNECT THE SYSTEM TO THE UI [X] 
    what we need: 
        an api to output a (next) question [] @Current
        an api to submit an answer to that question []

Make the answer actually answer [X] 
