import React from "react";
import PasswordInput from "../../../components/PasswordInput";

class ExamplePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }
  render() {
    return (
      <div>
        <PasswordInput
          htmlId="passexp"
          name="password"
          value={this.state.password}
          onChange={(event) => this.setState({ password: event.target.value })}
          minLength={8}
          placeholder="Enter Password"
          showVisibilityToggle
          quality={this.getQuality()}
          {...this.props}
        ></PasswordInput>
      </div>
    );
  }
}

export default ExamplePassword;
