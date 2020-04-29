import React from "react";
import TextInput from "../../../components/TextInput";

export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="exp-opt"
        label="First Name"
        name="firstName"
        onChange={() => {}}
      />
    );
  }
}
