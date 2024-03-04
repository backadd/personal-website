import React from "react";
import "./Certifications.css"; // Import your CSS file for styling
import certifications from "../data/certificationData.json";

const Certification = ({ certification }) => {
  const handleClick = () => {
    // Redirect to the specified URL
   window.open(certification.url, '_blank', 'noopener,noreferrer'); 
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className="certification-box">
      <h4>{certification.name}</h4>
      <div className="certification-date">{certification.date}</div>
    </div>
  );
};

const CertificationList = ({ certifications }) => {
  return (
    <div className="certification-list">
      {certifications.map((certification, index) => (
        <Certification key={index} certification={certification} />
      ))}
    </div>
  );
};

export default function Certifications() {
  return <CertificationList certifications={certifications} />;
}
