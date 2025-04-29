import './Rules.css';

function Rules() {
  return (
    <div className="rulesSection">
      <h2 className="rulesSection-title">Regras</h2>
      <div className="rulesSection-content">
        <p className="rulesSection-text">
          A empresa ou recrutador deve preencher o formulário com as seguintes informações: 
          nome, localidade, modelo de trabalho, contato e uma breve descrição, respeitando os valores abaixo:
        </p>

        <ul className="rulesSection-list">
          <li className="rulesSection-listItem">
            Destaque os valores do projeto, preferencialmente especificando as ferramentas utilizadas e o propósito do serviço.
          </li>
          <li className="rulesSection-listItem">
            Certifique-se de revisar cuidadosamente, pois serão selecionados apenas serviços com potencial de futuro e valor.
          </li>
        </ul>

        <p className="rulesSection-text">Além disso, é importante seguir estas diretrizes:</p>

        <ul className="rulesSection-list">
          <li className="rulesSection-listItem">Os valores só serão discutidos após contato direto.</li>
          <li className="rulesSection-listItem">Todas as demandas receberão uma resposta.</li>
          <li className="rulesSection-listItem">Meu contato e e-mail estão disponíveis na aba de contatos.</li>
          <li className="rulesSection-listItem">
            O perfil e histórico da empresa serão analisados, assim como a existência de vínculo entre o recrutador e a empresa, se aplicável.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;