import {akinatorSprites, frameWidth, frameHeight, imageURL} from '../services/akinator_sprites'; 

export function Akinator({style}) {
    // TODO: akinator
    // can display different akinator sprites []
    // have different sprites to show emotions []
    // position: relative to the right side of the question block []
    const emotionMapping = {};  // TODO: map a number to emotion string 
    const emotion = "Neutral";
    const frameInfo = akinatorSprites[emotion];
    const frameX = frameInfo.u*frameWidth;
    const frameY = frameInfo.v*frameHeight;

    const crop = {
        // TODO: crop the frame here 

    };

    return (
        <>
            <div style={style}>Akinator sprite</div>
            <img style={crop}src={imageURL}/>
        </>
    );
}
