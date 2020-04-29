import React from "react";
import PropTypes from "prop-types";

const Label = ({ htmlFor, label, required }) => {
  return (
    <label style={{ display: "block" }} htmlFor={{ htmlFor }}>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </label>
  );
};

Label.propTypes = {
  /**
   * HTML Id for associated input
   */
  htmlFor: PropTypes.string.isRequired,

  /**
   * Label Text
   */
  label: PropTypes.string.isRequired,

  /**
   * Required Symbol
   */
  required: PropTypes.bool,
};

export default Label;
