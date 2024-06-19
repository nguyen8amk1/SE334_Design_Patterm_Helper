import {akinatorSprites, frameWidth, frameHeight, imageURL} from '../services/akinator_sprites'; 
import ImageCropper from './ImageCropper';

export function Akinator({style, emotion}) {
    // TODO: akinator
    // can display different akinator sprites []
    // have different sprites to show emotions []
    // position: relative to the right side of the question block []
    const frameInfo = akinatorSprites[emotion];
    const frameX = frameInfo.u*frameWidth;
    const frameY = frameInfo.v*frameHeight;

    const newframeX = frameX+80;
    const newframeY = frameY+250;
    const newframeWidth = frameWidth-160;
    const newframeHeight = frameHeight-450;

    return (
        <>
            <div style={style}>
                <ImageCropper
                src={imageURL}
                alt="Image to crop"
                x={newframeX}
                y={newframeY}
                width={newframeWidth}
                height={newframeHeight}
                invertVerticalAxis={true}
                />
            </div>
        </>
    );
}
