import { useState, useEffect } from 'react';
import Competition from './Competition';
import competitionsData from '../competitions.json';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    setCompetitions(competitionsData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Liste des compétitions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Fees</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {competitions.map((competition) => (
              <Competition 
                key={competition.id} 
                competition={competition} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Competitions;