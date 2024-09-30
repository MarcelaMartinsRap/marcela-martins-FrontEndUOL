import { useState } from "react";

function Piada({ piada, onDelete }) {
    const [mostrarResposta, setMostrarResposta] = useState(false);
  
    const toggleResposta = () => {
      setMostrarResposta(!mostrarResposta);
    };
  
    return (
      <li>
        {piada.piada}
        <button onClick={toggleResposta}>
          {mostrarResposta ? 'Esconder resposta' : 'Ver resposta'}
        </button>
        {mostrarResposta && <p>{piada.resposta}</p>}
        <button onClick={onDelete}>Excluir</button>
      </li>
    );
  }
  
  export default Piada;
