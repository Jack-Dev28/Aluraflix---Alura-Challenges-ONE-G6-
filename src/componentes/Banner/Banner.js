import React, { useState } from 'react';
import './Banner.css'; // Import your CSS file;

import ReactPlayer from "react-player";


function Banner() {

    return (
        <div className="container">
            <div className="block-1">
                <h1><span>FRONT END</span></h1>
                <h2>Challenge React</h2>
                <p>
                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la relación de un problema para poder aplicar todos los conocimientos adquiridos en la formación React
                </p>
            </div>
            <div className="block-2">
            <div className="video-container">
            <ReactPlayer className="video-player" url="https://www.youtube.com/watch?v=ov7vA5HFe6w" alt="ne" />
            <img src="https://i.ytimg.com/vi/ov7vA5HFe6w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6ES-hBLVji9KDUvULp-U4qyoV9A" alt="a" />
            </div>
            </div>
        </div>
    );
}

export default Banner;