import './Experience.css';

function Experience() {
  return (
    <div className="experience-section">
      <h2>Frellance e propostas</h2>
      <div className="experience-content">
        <div className="experience-item">
          <h3>Empresa ou nome</h3>
          <input type="text" placeholder="Empresa" className="experience-input" />
        </div>
        <div className="experience-item">
          <h3>Local</h3>
          <input type="text" placeholder="Sua função" className="experience-input" />
        </div>
        <div className="experience-item">
          <h3>Modelo de trabalho</h3>
          <input type="text" placeholder="Tempo na empresa" className="experience-input" />
        </div>
        <div className="experience-item">
          <h3>Descrição</h3>
          <textarea placeholder="Descreva suas responsabilidades" className="experience-textarea"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Experience;