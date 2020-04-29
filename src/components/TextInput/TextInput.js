import React from "react";
import PropTypes from "prop-types";
import Label from "../Label/index";

function TextInput({
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
    <div style={{ marginBottom: 16 }}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && { border: "solid 1px red" }}
        {...props}
      />
      {children}
      {error && (
        <div className="error" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
}

TextInput.propTypes = {
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

export default TextInput;
