import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddPlayer from '../AddPlayer/AddPlayer';
import { useCompetitionStore } from '../store/competitionStore';

const CompetitionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const competitions = useCompetitionStore((state) => state.competitions);
  const addPlayer = useCompetitionStore((state) => state.addPlayer);
  const competition = competitions.find((c) => c.id.toString() === id);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  if (!competition) {
    return (
      <div className="text-center mt-10 text-red-600">
        Competition not found.
      </div>
    );
  }

  const handleConfirm = (username) => {
    // Vérifie si le joueur existe déjà
    if (competition.players && competition.players.includes(username)) {
      setError('This username already exists!');
      return;
    }
    addPlayer(id, username);
    setShowForm(false);
    setError('');
  };

  return (
    <div className="border rounded p-8 max-w-4xl mx-auto mt-8 bg-white">
      <h2 className="text-2xl text-center mb-2">{competition.name}</h2>
      <div className="text-center mb-2">Price : {competition.fees} DT</div>
      <div className="text-center mb-4">Date : {competition.date}</div>
      <div className="text-center mb-4">
        Description :{competition.description}
      </div>
      <div className="text-center mb-6">
        participants :{competition.participants}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-6 rounded disabled:opacity-50"
          disabled={competition.participants === 0}
          onClick={() => { setShowForm(true); setError(''); }}
        >
          Participate
        </button>
      </div>
      {showForm && (
        <>
          <AddPlayer onConfirm={handleConfirm} />
          {error && (
            <div className="text-red-600 text-center mt-2">{error}</div>
          )}
        </>
      )}

      {/* Affichage de la liste des participants */}
      {competition.players && competition.players.length > 0 && (
        <div className="mt-8 max-w-md mx-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left font-bold">Username</th>
              </tr>
            </thead>
            <tbody>
              {competition.players.map((player, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4">{player}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          className="text-blue-500 underline"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CompetitionDetails;