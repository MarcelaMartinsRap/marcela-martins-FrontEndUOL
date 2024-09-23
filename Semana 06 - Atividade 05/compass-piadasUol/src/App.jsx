import { useState, useEffect } from "react";
import Piada from "./components/Piada";
import FormPiada from "./components/FormPiada";
import "../src/stily.css";

function App() {
  const [piadas, setPiadas] = useState([]);
  const MAX_PIADAS = 10;

  useEffect(() => {
    fetch("../src/piada.json")
      .then((res) => res.json())
      .then((data) => setPiadas(data));
  }, []);

  const handleAddPiada = (novaPiada) => {
    if (piadas.length >= MAX_PIADAS) {
      alert("Delete uma piada para adicionar outra!");
      return;
    }

    setPiadas([...piadas, novaPiada]);
  };
  fetch("../src/piada.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([...piadas]),
  });

  const handleDeletePiada = (index) => {
    const novasPiadas = [...piadas];
    novasPiadas.splice(index, 1);
    setPiadas(novasPiadas);

    fetch("piadas.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novasPiadas),
    });
  };
  return (
    <div className="App">
      <h1>Compass Piadas</h1>
      <FormPiada onAddPiada={handleAddPiada} />
      <ul>
        {piadas.map((piada, index) => (
          <Piada key={index} piada={piada} onDelete={() => handleDeletePiada(index)} />
        ))}
      </ul>
   
    </div>
  );
}


export default App;
