import React, { useState } from 'react';

const AddPlayer = ({ onConfirm }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      onConfirm(username);
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center">
      <div className="mb-4 flex items-center">
        <label htmlFor="username" className="mr-2 font-bold text-lg">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          className="border rounded px-3 py-1 text-lg font-semibold"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
      >
        Confirm
      </button>
    </form>
  );
};

export default AddPlayer;