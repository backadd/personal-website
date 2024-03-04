import React from 'react';
import './WorkExperience.css'; // Import your CSS file for styling
import workExperiences from '../data/workExperienceData.json';

const WorkExperienceBox = ({ job }) => {
  return (
    <div className="work-experience-box">
      <div className="work-duration">{job.duration}</div>
      <div className="work-details">
        <h3>{job.role} at {job.company}</h3>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

const WorkExperienceList = ({ experiences }) => {
  return (
    <div className="work-experience-list">
      {experiences.map((job, index) => (
        <WorkExperienceBox key={index} job={job} />
      ))}
    </div>
  );
};

export default function WorkExperience() {
  return <WorkExperienceList experiences={workExperiences} />;
}
