import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";

interface CompletionCheckboxProps {
  checked: boolean;
  disabled: boolean;
  onClick: () => void;
}

const CompletionCheckbox: FC<CompletionCheckboxProps> = styled((props: CompletionCheckboxProps) => {
  const { checked, disabled, onClick } = props;
  return <Checkbox checked={checked} disabled={disabled} onClick={onClick} color="success" />;
})(() => ({}));

export default CompletionCheckbox;
