import { useState, useEffect } from 'react';
import Header from './components/sections/Header/Header';
import Sidebar from './components/sections/Sidebar/Sidebar';
import Profile from './components/sections/Profile/Profile';
import Experience from './components/sections/Experience/Experience';
import About from './components/sections/About/About';
import Rules from './components/sections/Rules/Rules';
import Certificate from './components/sections/Certificate/Certificate';
import Project from './components/sections/Project/Project';
import './styles/globals.css';
import certificatesData from './data/certificates.json';
import Footer from './components/sections/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [certificates, setCertificates] = useState<Array<{
    id: number;
    title: string;
    issuer: string;
    date: string;
    imageUrl: string;
  }>>([]);

  useEffect(() => {
    setCertificates(certificatesData.certificates);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Profile />

        <div className="sections-container">
          <About />
        </div>

        <div className="sections-container">
          <Experience />
          <Rules />
        </div>

        <div className="sections-container">
          <Project
            title="PROJETO 1"
            description="Este projeto é desenvolvido e profissional de perfil artístico, mostrando sua fina linha de design. O objetivo é fortificar a capacidade técnica de comunicação, expressar a ênfase sobre as habilidades especializadas e seus fundamentos, demonstrando sua versatilidade e forma uma imagem mais impressiva."
            imageUrl="/caminho/para/sua/imagem.jpg"
            onView={() => window.open('/project/1', '_blank')}
          />
        </div>
          <Project
            title="PROJETO 2"
            description="Este projeto é desenvolvido e profissional de perfil artístico, mostrando sua fina linha de design. O objetivo é fortificar a capacidade técnica de comunicação, expressar a ênfase sobre as habilidades especializadas e seus fundamentos, demonstrando sua versatilidade e forma uma imagem mais impressiva."
            imageUrl="/caminho/para/sua/imagem.jpg"
            onView={() => window.open('/project/1', '_blank')}
          />

        <div className="sections-container">
        </div>

        <div className="sections-container">
          <Project
            title="PROJETO 3"
            description="Este projeto é desenvolvido e profissional de perfil artístico, mostrando sua fina linha de design. O objetivo é fortificar a capacidade técnica de comunicação, expressar a ênfase sobre as habilidades especializadas e seus fundamentos, demonstrando sua versatilidade e forma uma imagem mais impressiva."
            imageUrl="/caminho/para/sua/imagem.jpg"
            onView={() => window.open('/project/1', '_blank')}
          />
        </div>

        <div className="sections-container">
          <div className="certificates-section">

            <div className="certificates-grid">
              {certificates.map(cert => (
                <Certificate
                  key={cert.id}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  imageUrl={cert.imageUrl}
                  onView={() => window.open(`/certificates/${cert.id}`, '_blank')}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='sections-container'>
        </div>
      </main>
      <Footer />  
    </div>
  );
}

export default App;