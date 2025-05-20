import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => (
  <nav className="bg-gray-50 px-8 py-4 flex space-x-6 text-xl font-light">
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        isActive
          ? 'underline text-black font-normal'
          : 'text-gray-500 hover:text-black'
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/competitions"
      className={({ isActive }) =>
        isActive
          ? 'underline text-black font-normal'
          : 'text-gray-500 hover:text-black'
      }
    >
      Competitions
    </NavLink>
  </nav>
);

export default NavigationBar;