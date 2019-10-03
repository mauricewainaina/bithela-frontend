import React from "react";
import classnames from "classnames";

const TextInput = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  icon,
  error,
  required,
  type,
  info,
  disabled
}) => {
  return (
    <div className="form-group input-group ">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          {icon}
        </span>
      </div>
      <input
        type={type}
        className={classnames("form-control form-control-md", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextInput;
