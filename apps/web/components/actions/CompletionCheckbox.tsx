import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";

const CompletionCheckbox: FC<CheckboxProps> = styled((props: CheckboxProps) => {
  return <Checkbox {...props} />;
})(() => ({}));

export default CompletionCheckbox;
