export function Akinator() {
    // TODO: akinator
    // can display different akinator sprites []
    // have different sprites to show emotions []
    // position: relative to the right side of the question block []
    const akinator = {
        width: '250px',   // Adjust width as needed
        height: '400px',  // Adjust height as needed
        backgroundColor: '#3498db',  // Big blue rectangle color
        position: 'absolute',  // Position absolutely for precise placement
        top: '50px',    // Adjust top position
        right: '150px',  // Adjust right position
    };

    return (
        <>
            <div style={akinator}></div>
        </>
    );
}
