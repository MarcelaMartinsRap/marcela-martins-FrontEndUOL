import { useState } from "react";

function FormPiada({ onAddPiada }) {
  const [novaPiada, setNovaPiada] = useState({ piada: "", resposta: "" });

  const handleChange = (e) => {
    setNovaPiada({ ...novaPiada, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPiada(novaPiada);
    setNovaPiada({ piada: "", resposta: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="piada"
        value={novaPiada.piada}
        onChange={handleChange}
        placeholder="Digite a piada"
      />
      <input
        type="text"
        name="resposta"
        value={novaPiada.resposta}
        onChange={handleChange}
        placeholder="Digite a resposta"
      />
      <button className="addPiada" type="submit">Adicionar Piada</button>
    </form>
  );
}

export default FormPiada;
