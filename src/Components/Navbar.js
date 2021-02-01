import React from 'react';


import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div class="navbar">
      <h3>COCTAIL</h3>
      <Link to="/home">Home</Link>
      <Link to="/random">Random Images</Link>
    </div>
  )
}

export default Navbar

 