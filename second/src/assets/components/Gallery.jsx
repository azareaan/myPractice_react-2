import React from 'react';
import { useEffect, useState } from 'react'
import './Gallery.css';


const Gallery = ({images}) => {
        
    return (
        <div className="gallery">

            {images?.map((image) => (
                <div key={image.id} className="gallery-item">
                    <img src={image.urls.small} alt={image.alternative_slugs.en} />
                </div>
            ))}

        </div>
    );
};

export default Gallery;