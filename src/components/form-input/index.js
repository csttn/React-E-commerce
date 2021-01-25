import React from "react";

import "./form-styles.scss";
function FormInput({ handleChange, label, value, name, type }) {
  return (
    <div className="group">
      <input
        type={type}
        name={name}
        className="form-input"
        onChange={handleChange}
      />

      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
