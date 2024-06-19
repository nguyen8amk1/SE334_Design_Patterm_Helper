// ImageCropper.js
import React from 'react';
import './ImageCropper.css';

class ImageCropper extends React.Component {
    constructor(props) {
        super(props);
        this.cropContainerRef = React.createRef();
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.cropImage();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.cropImage();
        }
    }

    cropImage() {
        const { x, y, width, height, invertHorizontalAxis, invertVerticalAxis } = this.props;

        const cropContainer = this.cropContainerRef.current;
        const image = this.imageRef.current;

        // Set the dimensions of the crop container
        cropContainer.style.width = width + 'px';
        cropContainer.style.height = height + 'px';

        // Set the position of the image inside the container
        image.style.left = -x + 'px';
        image.style.top = -y + 'px';

        // Apply inversion transformations to the container
        let transform = '';
        if (invertHorizontalAxis) {
            transform += ' scaleY(-1)';
        }
        if (invertVerticalAxis) {
            transform += ' scaleX(-1)';
        }
        cropContainer.style.transform = transform.trim();
    }

    render() {
        const { src, alt } = this.props;
        return (
            <div className="crop-wrapper">
                <div className="crop-container" ref={this.cropContainerRef}>
                    <img id="image" src={src} alt={alt} ref={this.imageRef} />
                </div>
            </div>
        );
    }
}

export default ImageCropper;
