import React, { useState } from 'react';
import "../css/OverlayImage.css";

function ImageOverlay (props) {
    const [overlayWidth, setOverlayWidth] = useState(0);

    const handleMouseEnter = () => {
        setOverlayWidth('100%');
    }

    const handleMouseLeave = () => {
        setOverlayWidth(0);
    }

    return (
        <div className="image_overlay_container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={props.img} style={{height: '400px'}} ></img>
            <div className="overlay" style={{width: overlayWidth}}>
                <div className="imagetext" style={{width:'inherit', 
                                                   textAlign:'center',
                                                   fontSize:25}}> {props.img_text} </div> 
            </div>
        </div>
    )
}

export default ImageOverlay;