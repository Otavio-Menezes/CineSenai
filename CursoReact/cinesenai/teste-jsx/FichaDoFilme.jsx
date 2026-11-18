//Crie o componente FichaDoFilme com um filme fixo: título, gênero e duração em minutos. Mostre a duração no formato "2h 46min" calculando as horas e os minutos com JavaScript dentro das chaves.

import { data } from "react-router-dom";

export const FichaDoFilme = () => {
  const filme = "Vingadores";
  const genero = "ação";
  const tempo = 166;

  const horas = Math.floor(tempo / 60);
  const minutos = tempo % 60

  return (
    <div className="glass" style={{padding: "1rem", marginBottom: "1rem"}}>
      <h2 >
        {filme}
      </h2>

      <p>
        Gênero: {genero}
      </p>

      <p>
        Duração: {horas}h {minutos}min
      </p>

    </div>
  );
};
