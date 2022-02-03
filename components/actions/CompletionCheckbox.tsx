import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";

const CompletionCheckbox: FC<CheckboxProps> = styled((props: CheckboxProps) => {
  const { checked, disabled, onClick } = props;
  return <Checkbox checked={checked} disabled={disabled} onClick={onClick} color="success" />;
})(() => ({}));

export default CompletionCheckbox;
