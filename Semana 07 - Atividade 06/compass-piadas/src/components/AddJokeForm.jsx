import React, { useState } from 'react';

function AddJokeForm({ setJokes, jokes }) {
  const [newJoke, setNewJoke] = useState({ setup: '', punchline: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jokes.length >= 10) {
      alert('Você atingiu o limite máximo de 10 piadas.');
      return;
    }
    setJokes([...jokes, newJoke]);
    setNewJoke({ setup: '', punchline: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Setup:
        <input type="text" value={newJoke.setup} onChange={(e) => setNewJoke({ ...newJoke, setup: e.target.value })} />
      </label>
      <label>
        Punchline:
        <input type="text" value={newJoke.punchline} onChange={(e) => setNewJoke({ ...newJoke, punchline: e.target.value })} />
      </label>
      <button type="submit">Adicionar Piada</button>
    </form>
  );
}

export default AddJokeForm;
