import React from 'react';
import './Bio.css'; // Import the CSS for styling
import bioData from '../data/bioData.json';

const BioSection = () => {
  return (
    <div className="bio-section">
      {bioData.map((item, index) => (
        <p key={index} className="bio-text">{item.paragraph}</p>
      ))}
    </div>
  );
};


export default BioSection;
