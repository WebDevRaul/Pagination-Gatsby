import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import { Link } from "gatsby";

import StyledNavbar from './Styled_Navbar';

const Navbar = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false);

  const onToggle = () => setOpen(!isOpen);
  const onClick = () => isOpen ? setOpen(false) : null;

  return (
    <StyledNavbar>
      <nav className='navbar navbar-light bg-light'>
        <div className='nav-wrapper'>
          <div className='nav-header'>
            <Link to='/'>{siteTitle}</Link>
            <button type='button' className='navbar-toggler' onClick={onToggle}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <ul className={classnames('nav-links', {'show-nav' : isOpen})} >
            <li><Link to='/pagination-one' onClick={onClick}>Example 1</Link></li>
            <li><Link to='/pagination-two' onClick={onClick}>Example 2</Link></li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
