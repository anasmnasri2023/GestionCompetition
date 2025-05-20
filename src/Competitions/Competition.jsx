import { useState } from 'react';

const Competition = ({ competition }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="p-3">{competition.id}</td>
      <td className="p-3">{competition.name}</td>
      <td className="p-3">{competition.fees}</td>
      <td className="p-3">{competition.date}</td>
      <td className="p-3 relative">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-500 hover:underline"
        >
          Details
        </button>
        
        {showDetails && (
          <div className="absolute right-0 top-full mt-2 p-4 bg-white shadow-lg rounded-md border border-gray-200 w-64 z-10">
            <h3 className="font-bold mb-2">{competition.name}</h3>
            <p className="text-sm mb-2">Participants: {competition.participants}</p>
            <p className="text-sm">{competition.description}</p>
            <button 
              onClick={() => setShowDetails(false)}
              className="mt-3 px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Fermer
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Competition;