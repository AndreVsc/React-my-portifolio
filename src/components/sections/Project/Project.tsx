import React from 'react';
import './Project.css';

type ProjectProps = {
  title: string;
  description: string;
  imageUrl?: string;
  onView?: () => void;
};

const Project: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  imageUrl, 
  onView 
}) => {
  return (
    <div className="project-card">
      {/* Left side with image */}
      <div className="project-card-image">
        {imageUrl ? (
          <img src={imageUrl} alt={title} />
        ) : (
          <div className="placeholder-image"></div>
        )}
      </div>
      
      {/* Right side with content */}
      <div className="project-card-content">
        <div className="project-card-text">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>
        </div>
        
        <button 
          onClick={onView} 
          className="project-card-button"
        >
          Visualizar
        </button>
      </div>
    </div>
  );
};

export default Project;