// TODO: contains the frame metadata with emotions as key 
// There are 2 frames
// image width: 4020
// image height: 2190
// frame width: 4020/6 = 670
// frame height: 2190/2 = 1095

// NOTE: this contains uv coord
const frameWidth = 670;
const frameHeight = 1095;
const imageURL = "../../public/akinator.png";
const akinatorSprites = {
    Neutral: {
        u: 3, 
        v: 0, 
    },//The default expression.

    Thinking: {
        u: 0, 
        v: 0, 
    },// When Akinator is pondering a question.

    Confident: {
        u: 1, 
        v: 0, 
    },//When Akinator believes it is close to the answer.

    Happy: {
        u: 4, 
        v: 1, 
    },//When Akinator successfully guesses the correct answer.

    Angry: {
        u: 5, 
        v: 1, 

    },//When Akinator fails to guess correctly.
}

module.exports = {
    frameWidth, 
    frameHeight, 
    akinatorSprites, 
    imageURL, 
}
