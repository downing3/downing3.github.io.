import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
    <nav className="bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex items-center">
          <Link to="/hero">
            <span className="text-white text-2xl font-thin italic">naomi mendocino downing</span>
          </Link>
        </div>
      </div>
    </nav>
    
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

      <li><a href="/">Sidebar Item 1</a></li>
      <li><a href="/">Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
</div>
  );
}

export default NavBar;


