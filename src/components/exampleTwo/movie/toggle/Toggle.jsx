import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledToggle from './Styled_Toggle';

const Toggle = ({ toggle, setToggle }) => {

  const onChange = () => setToggle(!toggle);

  return (
    <StyledToggle>
      <h5 className='text-muted'>More info</h5>
      <label className="switch">
        <input type="checkbox" value={toggle} onChange={onChange} />
        <span className="slider">
          <i className={classnames('off-off', {'off-on': toggle})}>Off</i>
          <i className={classnames('on-off', {'on-on': toggle})}>On</i>
        </span>
      </label>
    </StyledToggle>
  )
}

Toggle.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired
}

export default Toggle;