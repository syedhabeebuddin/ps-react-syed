import React from "react";
import TextInputBEM from "../../../components/TextInputBEM";

export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInputBEM
        htmlId="exp-opt"
        label="First Name"
        name="firstName"
        onChange={() => {}}
        required
        error="First name is required"
      />
    );
  }
}
