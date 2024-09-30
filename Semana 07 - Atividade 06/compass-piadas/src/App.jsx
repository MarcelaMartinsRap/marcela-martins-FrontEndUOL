import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/stily.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [newJoke, setNewJoke] = useState("");
  const [newResponse, setNewResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [visibleResponses, setVisibleResponses] = useState(new Set()); 
  const [inputValor, setInputValor] = useState('');  

  useEffect(() => {
    const fetchJokes = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3100/Jokes");
        setJokes(response.data);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
      setLoading(false);
    };
    fetchJokes();
  }, []);

  const addJoke = async () => {
    if (jokes.length >= 10) {
      alert("Delete uma piada para adicionar outra!");
      return;
    }

    const newJokeObj = {
      joke: newJoke,
      response: newResponse,
    };

    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:3100/Jokes", newJokeObj);
      setNewJoke("");
      setNewResponse("");
      fetchJokes();
    } catch (error) {
      console.error("Error adding joke:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteJoke = async (id) => {
    setDeleting(true);

    try {
      await axios.delete(`http://localhost:3100/Jokes/${id}`);
      fetchJokes();
    } catch (error) {
      console.error("Error deleting joke:", error);
    } finally {
      setDeleting(false);
    }
  };

  const toggleResponseVisibility = (id) => {
    if (visibleResponses.has(id)) {
      visibleResponses.delete(id);
    } else {
      visibleResponses.add(id);
    }
    setVisibleResponses(new Set(visibleResponses)); 
  };
  const handleInputChange = (event) => {  
    setInputValor(event.target.value);  
};  

const handleSubmit = () => {  
    if (inputValor.trim() === '') {  
        alert('Por favor, preencha o campo antes de enviar.');  
    } else {  
        alert(`Campo preenchido: ${inputValor}`);  
       
    }  
};  


  return (
    <div className="App">
      <h1>Compass Piadas</h1>
      <div>
        <input
          type="text"
          placeholder="Adicione uma piada"
          value={newJoke}
          onChange={(e) => setNewJoke(e.target.value)}
          disabled={isSubmitting || deleting}
        />
        <input
          type="text"
          placeholder="Adicione uma resposta"
          value={newResponse}
          onChange={(e) => setNewResponse(e.target.value)}
          disabled={isSubmitting || deleting}
        /> <br />
        <button
          onClick={addJoke}
          disabled={isSubmitting || deleting}
          style={{ backgroundColor: "green", color: "white" , marginTop: "20px"}}
        >
          {isSubmitting ? "Adicionando..." : "Adicionar Piada"}
        </button>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {jokes.map((joke) => (
            <div key={joke.id} className="joke-item">
              <p style={{ fontWeight: "bold" }}>{joke.joke}</p> 
              <button
                onClick={() => toggleResponseVisibility(joke.id)}
                style={{ marginBottom: "10px" }}
              >
                {visibleResponses.has(joke.id)
                  ? "Ocultar Resposta"
                  : "Ver Resposta"}
              </button>
              {visibleResponses.has(joke.id) && <p>{joke.response}</p>}
              <button onClick={() => deleteJoke(joke.id)} disabled={deleting}>
                {deleting ? "Deletando..." : "Deletar"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
