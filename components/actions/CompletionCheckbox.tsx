import Checkbox from "@mui/material/Checkbox";
import React, { FC } from "react";

interface CompletionCheckboxProps {
  checked: boolean;
  disabled: boolean;
  onClick: () => void;
}

const CompletionCheckbox: FC<CompletionCheckboxProps> = (props: CompletionCheckboxProps) => {
  const { checked, disabled, onClick } = props;
  return <Checkbox checked={checked} disabled={disabled} onClick={onClick} />;
};

export default CompletionCheckbox;
