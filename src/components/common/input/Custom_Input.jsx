import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledInput from './Styled_Input';

const CustomInput = ({ name, value, onChange, label, type }) => (
  <StyledInput>
    <div className='group'>
      <input 
        className='form-input'
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        autoComplete='true'
        required
      />
      <label className={classnames('form-input-label', { 'shrink': value })}>
        {label}
      </label>
    </div>
  </StyledInput>
);

CustomInput.defaultProps = {
  type: 'text'
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default CustomInput;