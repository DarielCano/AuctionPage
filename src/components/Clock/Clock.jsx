import { useState, useEffect } from "react";

import "./Clock.css";

const Clock = () => {
  let [diasFaltantes, setDiasFaltantes] = useState("00");
  let [horaFaltante, setHoraFaltante] = useState("00");
  let [minFaltante, setMinFaltante] = useState("00");
  let [segFaltante, setSegFaltante] = useState("00");

  const [final, setFinal] = useState(false);

  function primerosDigitos(num) {
    return (num = num < 10 ? "0" + num : num);
  }

  useEffect(() => {
    const fechaFutura = new Date("July 28, 2023 08:50:00");
    const futureTime = fechaFutura.getTime();

    let intervalo = setInterval(() => {
      const fechaPuja = new Date();
      const milisegundosDiferencia = futureTime - fechaPuja.getTime();

      let dias = Math.floor(milisegundosDiferencia / (1000 * 60 * 60 * 24));
      dias = primerosDigitos(dias);
      let hora = Math.floor(
        (milisegundosDiferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      hora = primerosDigitos(hora);
      let min = Math.floor(
        (milisegundosDiferencia % (1000 * 60 * 60)) / (1000 * 60)
      );
      min = primerosDigitos(min);
      let seg = Math.floor((milisegundosDiferencia % (1000 * 60)) / 1000);
      seg = primerosDigitos(seg);

      if (dias < 0) {
        clearInterval(intervalo);
        setFinal(true);
      } else {
        setDiasFaltantes(dias);
        setHoraFaltante(hora);
        setMinFaltante(min);
        setSegFaltante(seg);
      }
    }, 1000);
  });

  return final === false ? (
    <div className="clock-info">
      <p>Puja termina en: </p>
      <strong>
        {diasFaltantes +
          ":" +
          horaFaltante +
          ":" +
          minFaltante +
          ":" +
          segFaltante}
      </strong>
    </div>
  ) : (
    <p>El fin</p>
  );
};

export default Clock;
