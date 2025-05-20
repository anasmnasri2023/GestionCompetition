import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Competitions from './Competitions/Competitions';
import Home from './Home/Home';
import NavigationBar from './NavigationBar/NavigationBar';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Système de Gestion des Compétitions</h1>
        </header>
        <NavigationBar />
        <main className="p-4">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/competitions" element={<Competitions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;