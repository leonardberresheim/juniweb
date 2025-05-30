// src/components/GalleryDisplay.tsx
import React from 'react';

interface GalleryDisplayProps {
  images: string[];
}

const GalleryDisplay: React.FC<GalleryDisplayProps> = ({ images }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
      {images.map((image, index) => (
        <img key={index} src={image} alt="" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      ))}
    </div>
  );
};

export default GalleryDisplay;