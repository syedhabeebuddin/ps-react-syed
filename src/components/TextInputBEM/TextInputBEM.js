import React from "react";
import PropTypes from "prop-types";
import Label from "../Label/index";

function TextInputBEM({
  htmlId,
  name,
  label,
  type = "text",
  required = false,
  onChange,
  placeholder,
  value,
  error,
  children,
  ...props
}) {
  return (
    <div className="textinputbem">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error && "textinputbem__input--state-error"}
        {...props}
      />
      {children}
      {error && <div className="textinputbem__error">{error}</div>}
    </div>
  );
}

TextInputBEM.propTypes = {
  /**
   * HTML control id
   */
  htmlId: PropTypes.string.isRequired,

  /**
   * name of the html control
   */
  name: PropTypes.string.isRequired,

  /**
   * label text
   */
  label: PropTypes.string.isRequired,

  /**
   * Type of html control
   */
  type: PropTypes.oneOf(["text", "number", "password"]),

  /**
   * Is input manadatory
   */
  required: PropTypes.bool,

  /**
   * Callback OnChange function
   */
  onChange: PropTypes.func.isRequired,

  /**
   * placeholder
   */
  placeholder: PropTypes.string,

  /**
   * value
   */
  value: PropTypes.any,

  /**
   * error
   */
  error: PropTypes.string,

  /**
   * child components
   */
  children: PropTypes.node,
};

export default TextInputBEM;
