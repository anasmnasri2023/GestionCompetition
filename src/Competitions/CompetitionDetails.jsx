import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import competitionsData from '../competitions.json';

const CompetitionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const competition = competitionsData.find(c => c.id.toString() === id);

  if (!competition) {
    return (
      <div className="text-center mt-10 text-red-600">
        Competition not found.
      </div>
    );
  }

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
        >
          Participate
        </button>
      </div>
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