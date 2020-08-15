import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
            src="https://avatars0.githubusercontent.com/u/63604342?s=460&u=4573629b2abd75826e7e72a36366bea808b2bf0d&v=4"
            alt="Rômulo Carneiro"
        />
        <div>
          <strong>Rômulo Carneiro</strong>
          <span>Ciência da Computação</span>
        </div>
      </header>
      <p>
        Aulas sobre tecnologias como Machine Learning & linguagens de programação como Python.
        <br /> <br />
        Estude para se tornar um ciêntista da Computação e ser capaz de resolver qualquer desafios
        imposto pelo mercado de trabalho.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
