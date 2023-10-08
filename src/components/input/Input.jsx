import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ id, name, type, value, className, lableText, placeHolder, handleChange }) => {
  return (
    <>
      <div className='form-row'>
        {lableText && (
          <label htmlFor={name} className='form-lable'>{lableText}</label>
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeHolder}
          className={`form-input ${className}`}
          autoComplete='false'
        />
      </div>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  lableText: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  handleChange: PropTypes.func
};

export default Input;
