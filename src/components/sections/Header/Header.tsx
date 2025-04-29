import { AiOutlineGlobal } from "react-icons/ai";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">DEV.ops</div>
        <div className="language-selector">
          <span>PT-BR</span>
          <AiOutlineGlobal />
        </div>
      </div>
      <div className="header-main">
        <h1 className="title-header">André Victor</h1>
        <p className="profile-bio">
          Analista de Software em busca para vagas de desenvolvimento. Atualmente se aprimorando com tecnologias de clound e ia . Dentro do mercado planejo construir grandes coisas com foco no Mobile. Atuo como desenvolvedor front end de padaria mas quero constuir uma carreira sólida e desenvolcer minha própria empresa.
        </p>
      </div>
    </header>
  );
}

export default Header;