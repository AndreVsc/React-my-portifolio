import './About.css';

const About = () => {
    return (
        <div className="aboutSection">
            <h2 className="aboutSection__title">About Me</h2>
            <div className="aboutSection__content">
                <p className="aboutSection__text">
                    Analista de Front-end Jr desenvolvendo aplicativos e websites usando React e Next.js. 
                    Tenho experiência com interfaces modernas e responsivas.
                </p>
                <p className="aboutSection__text">
                    Minhas habilidades incluem HTML, CSS, JavaScript/TypeScript, React, Next.js, 
                    e conhecimentos em UI/UX design.
                </p>
                <p className="aboutSection__text">
                    Atualmente estou aprendendo desenvolvimento backend com Node.js e Express, 
                    e explorando tecnologias cloud como AWS.
                </p>
                <p className="aboutSection__text">
                    Aberto a oportunidades em desenvolvimento front-end ou full-stack onde 
                    possa contribuir e crescer profissionalmente.
                </p>
                <p className="aboutSection__text">
                    Vamos trabalhar juntos para criar soluções digitais de alta qualidade que 
                    fazem a diferença.
                </p>
            </div>
        </div>
    );
};

export default About;