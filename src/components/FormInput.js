import React from 'react';

const FormInput = ({ label, type, name, value, onChange, required }) => (
  <div className="form-input">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default FormInput;
