import React from 'react';
import { Link } from 'react-router-dom';

function DarkNavbar() {
  return (
    <div>
    <nav className="bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex items-center">
          <Link to="/">
            <span className="text-white bg-buttons text-2xl font-thin italic">naomi mendocino downing</span>
          </Link>
        </div>
      </div>
    </nav>
</div>
  );
}

export default DarkNavbar;


