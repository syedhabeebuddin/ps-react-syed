import React from "react";
import PropTypes from "prop-types";

/**
 * A Component for Helloworld.
 * @param {meaage} param0
 */

const HelloWorld = ({ message }) => {
  return <div>Hello {message}</div>;
};

HelloWorld.propTypes = {
  /**
   * Sample Message.
   */
  message: PropTypes.string,
};

HelloWorld.defaultProps = {
  message: "World",
};

export default HelloWorld;
