import { useState } from "react";

const CalculadoraImc = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const ImcUser = Math.round((peso / (altura ^ 2)) * 100) / 100;

  function classificarIMC() {
    if(ImcUser < 17) {
        return "Muito abaixo do peso"
    } else if (ImcUser >= 17 && ImcUser <= 18.49) {
        return "Abaixo do peso"
    } else if (ImcUser >= 18.5 && ImcUser <= 24.99) {
        return "Peso normal"
    } else if (ImcUser >= 25 && ImcUser <= 29.99) {
        return "Acima do peso"
    } else if (ImcUser >= 30 && ImcUser <= 34.99) {
        return "Obesidade I"
    } else if (ImcUser >= 35 && ImcUser <= 39.99) {
        return "Obesidade II (severa)"
    } else if (ImcUser >= 40) {
        return "Obesidade III (mórbida)"
    } else {
        return "Insira dados válidos"
    }
  }

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <form>
        <label htmlFor="altura">Altura(m): </label>
        <input
          id="altura"
          placeholder="Ex.: 1.70"
          type="number"
          onChange={({ target }) => setAltura(target.value)}
        />
        <br />
        <label htmlFor="peso">Peso(kg): </label>
        <input
          id="peso"
          placeholder="Ex.: 70"
          type="number"
          onChange={({ target }) => setPeso(target.value)}
        />
        <p>Seu IMC é: {ImcUser}</p>
        {classificarIMC()}
      </form>
    </>
  );
};

export default CalculadoraImc;
