import React from "react";
import Label from "../../../components/Label/index";

/**
 * Required Label
 */
export default function ExampleRequired() {
  return <Label htmlFor="test" label="test" required={true} />;
}
