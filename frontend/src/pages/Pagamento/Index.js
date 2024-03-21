import React, { useState } from "react";
import { Form } from "react-bootstrap"; // Importe Form do react-bootstrap

function Home() {
  const [exibirForms, setExibirForms] = useState(true);

  const handleClick = () => {
    setExibirForms(!exibirForms);
  };

  return (
    <div>
      <div className={exibirForms ? "elojob" : "caixa-berde"}>
        {exibirForms ? (
          <>
            <Form>Formulário 1</Form>
            <Form>Formulário 2</Form>
            <Form>Formulário 3</Form>
            <Form>Formulário 4</Form>
            <Form>Formulário 5</Form>
            <img src={bannerabraco} />
          </>
        ) : (
          <>
            <div>
              <div>Deus abençoe</div>
              <img src={bannerPascoa} />
            </div>
          </>
        )}
      </div>

      <button className="butao" onClick={handleClick}>
        Trocar Conteúdo
      </button>

      <div />
    </div>
  );
}

export default Home;
