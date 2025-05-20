import React from 'react';
import Competitions from './Competitions/Competitions';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Système de Gestion des Compétitions</h1>
      </header>
      <main>
        <Home />
        <Competitions />
      </main>
    </div>
  );
}

export default App;