'use client'
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul
          className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static bg-gray-800 w-full md:w-auto transition-all ${
            menuOpen ? "top-16 left-0" : "top-[-200px]"
          }`}
        >
          <li className="p-2 hover:bg-gray-700">Home</li>
          <li className="p-2 hover:bg-gray-700">About</li>
          <li className="p-2 hover:bg-gray-700">Services</li>
          <li className="p-2 hover:bg-gray-700">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
