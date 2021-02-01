import React from 'react';


import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div class="navbar">
      <Link to="/home">Home</Link><br></br>
      <Link to="/random">Random Images</Link>
    </div>
  )
}

export default Navbar

 