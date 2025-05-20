import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Competitions from './Competitions/Competitions';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Système de Gestion des Compétitions</h1>
          <nav className="mt-2 space-x-4">
            <Link to="/" className="hover:underline">Accueil</Link>
            <Link to="/competitions" className="hover:underline">Compétitions</Link>
          </nav>
        </header>
        
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competitions" element={<Competitions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
