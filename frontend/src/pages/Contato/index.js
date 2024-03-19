import React from "react";
import "./Contato.css";

const Contato = () => {
  return (
    <div className="container contact-container">
      <h1 className="text-center">Entre em Contato</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>Localização</h2>
          <p>Rua das Flores, 123</p>
          <p>Cidade das Flores</p>
          <p>CEP: 12345-678</p>
        </div>
        <div className="col-md-4">
          <h2>Horário de Funcionamento</h2>
          <p>Segunda a Sexta: 8h - 18h</p>
          <p>Sábado: 9h - 15h</p>
          <p>Domingo: Fechado</p>
        </div>
        <div className="col-md-4">
          <h2>Contato</h2>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@minhafloricultura.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
