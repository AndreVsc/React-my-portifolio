import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Contato</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:seuemail@exemplo.com" className="contact-text">anders.executive@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="tel:+5500000000000" className="contact-text">(36) 99105-0493</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text">Extrema, MG - Brasil</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Redes Sociais</h3>
          <div className="social-links">
            <a href="https://linkedin.com/in/andre-victor-castro" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/AndreVsc" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Disponibilidade</h3>
          <p className="availability-text">Disponível para projetos freelance e oportunidades de trabalho.</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© {currentYear} André Victor. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;