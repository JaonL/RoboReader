import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => (
  <div className='header'>
      <div className='headerText'>Robot Reader |</div>
    <Link to={'about'}><div className='headerText'>Learn More</div></Link>
  </div>
);

export default Header