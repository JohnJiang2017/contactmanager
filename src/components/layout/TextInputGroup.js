import React from 'react'
import PropTypes from 'prop-types'


const TextInputGroup = ({
    label, name, value, placeholder, type, onChange, error
}) => {
  return (
    <div className="form-group">
    <label htmlFor="phone">{label}</label>
    <input
        name={name}
        type={type} 
        className={(error == null)? "form-control form-control-lg" : "is-invalid form-control form-control-lg"}
        placeholder={placeholder}     
        value={value}
        onChange={onChange}                    
    />
    <div className="invalid-feedback">{error}</div>
</div>
  )
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;