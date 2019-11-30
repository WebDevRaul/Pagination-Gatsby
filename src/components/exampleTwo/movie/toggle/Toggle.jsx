import React from 'react';
import PropTypes from 'prop-types';

import StyledToggle from './Styled_Toggle';

const Toggle = ({ toggle, setToggle }) => {

  const onChange = () => setToggle(!toggle);

  return (
    <StyledToggle>
      <label className="switch">
        <input type="checkbox" value={toggle} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </StyledToggle>
  )
}

Toggle.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired
}

export default Toggle;