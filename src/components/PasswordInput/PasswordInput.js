import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../../components/ProgressBar";
import TextInput from "../../components/TextInput";

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }

  toggleShowPassword = (event) => {
    this.setState((prevState) => {
      return { showPassword: !prevState.showPassword };
    });

    if (event) event.preventDefault();
  };

  render() {
    const {
      htmlId,
      value,
      label,
      error,
      onChange,
      placeholder,
      maxLength,
      showVisibilityToggle,
      quality,
      ...props
    } = this.props;
    const { showPassword } = this.state;
    return (
      <TextInput
        htmlId={htmlId}
        label={label}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        error={error}
        required
        {...props}
      >
        {showVisibilityToggle && (
          <a
            href="#"
            onClick={this.toggleShowPassword}
            style={{ marginLeft: 5 }}
          >
            A
          </a>
        )}
        {value.length > 0 && quality && (
          <ProgressBar percent={quality} width={130} />
        )}
      </TextInput>
    );
  }
}

PasswordInput.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  showVisibilityToggle: PropTypes.bool.isRequired,
  quality: PropTypes.number,
  error: PropTypes.string,
};

PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: "Password",
};

export default PasswordInput;
