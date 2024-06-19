import ImageCropper from './ImageCropper';
import PseudoFactoryMethod from './PseudoCodes/FactoryMethod';
import {Akinator} from './AkinatorComponent';

export default function QuizResultComponent({result, additionalInfo}) {
    console.log(result);
    console.log(additionalInfo);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
        }}>
            {/**/}
            {/* <div style={{ */}
            {/*     width: '400px', */}
            {/*     height: '700px', */}
            {/*     top: '0px',    // Adjust top position */}
            {/*     left: '0px',  // Adjust right position */}
            {/**/}
            {/*     backgroundColor: 'green', */}
            {/*     color: "white",  */}
            {/*     // display: "flex",   */}
            {/*     // flexDirection: "column",   */}
            {/*     // alignItem: "center",   */}
            {/*     // justifyContent: "center",   */}
            {/*     margin: "10px", */}
            {/*     position: "absolute", */}
            {/*     // position: 'absolute',  // Position absolutely for precise placement */}
            {/*     // //top: '50px',    // Adjust top position */}
            {/* }}> */}
            {/*     {/* <h2>THIS IS PSEUDO OF OF THE PATTERN</h2> */} */}
            {/*     <div> */}
            {/*     <PseudoFactoryMethod/> */}
            {/*     </div> */}
            {/* </div> */}

            <div style={{
                width: '600px',
                height: '500px',
                backgroundColor: '#f6f8f8', 
                color: "black", 
                display: "flex",  
                flexDirection: "column",  
                alignItem: "center",  
                justifyContent: "center",  
                margin: "10px", 
                position: "relative",
                //overflow: "hidden",
                // position: 'absolute',  // Position absolutely for precise placement
                // //top: '50px',    // Adjust top position
                // top: '0px',    // Adjust top position
                // left: '50px',  // Adjust right position
            }}>
                <img style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}src={additionalInfo.diagram} alt="diagram"/>
            </div>

            <div style={{
                width: '500px',
                height: '200px',
                backgroundColor: '#f6f8f8',
                color: "black", 
                display: "flex",  
                flexDirection: "column",  
                alignItem: "center",  
                justifyContent: "center",  
                // position: 'absolute',  // Position absolutely for precise placement
                // //top: '50px',    // Adjust top position
                // top: '0px',    // Adjust top position
                // left: '50px',  // Adjust right position
            }}>
                <h2>My final answer</h2>
                <p>{result} Pattern</p>
            </div>
            <button className="btn red" onClick={() => window.location.reload()}>Try Again</button>

            <Akinator style={{
                // width: '250px',   // Adjust width as needed
                // height: '400px',  // Adjust height as needed
                // backgroundColor: '#3498db',  // Big blue rectangle color
                position: 'absolute',  // Position absolutely for precise placement
                top: '0px',    // Adjust top position
                right: '80px',  // Adjust right position
                color: "white",
            }}
                emotion={"Happy"}/>
        </div>
    );
}
