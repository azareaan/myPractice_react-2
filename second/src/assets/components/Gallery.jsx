import React from 'react';
import { useEffect, useState } from 'react'
import './Gallery.css';


const Gallery = ({images}) => {
        
    return (
        <div className="gallery">

            {images?.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image} alt={`Gallery ${index + 1}`} />
                </div>
            ))}

        </div>
    );
};

export default Gallery;