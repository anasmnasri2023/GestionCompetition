import React, { useEffect, useState } from 'react';

const NotFound = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center mt-10">
      {show && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md inline-block">
          <h2 className="text-xl font-bold">This page does not exist</h2>
        </div>
      )}
    </div>
  );
};

export default NotFound;