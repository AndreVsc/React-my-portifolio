import React from 'react';
import './Certificate.css';

type CertificateProps = {
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  onView?: () => void;
};

const Certificate: React.FC<CertificateProps> = ({ 
  title, 
  issuer, 
  date, 
  imageUrl, 
  onView 
}) => {
  return (
    <div className="certificate-card">
      {/* Left side with small image or icon */}
      <div className="certificate-card-image">
        {imageUrl ? (
          <img src={imageUrl} alt={title} />
        ) : (
          <div className="certificate-placeholder"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="certificate-card-content">
        <h4 className="certificate-card-title">{title}</h4>
        <div className="certificate-card-details">
          <span className="certificate-card-issuer">{issuer}</span>
          <span className="certificate-card-date">{date}</span>
        </div>
      </div>
      
      {/* View button */}
      <button 
        onClick={onView} 
        className="certificate-card-button"
        aria-label="Visualizar certificado"
      >
        Visualizar
      </button>
    </div>
  );
};

export default Certificate;