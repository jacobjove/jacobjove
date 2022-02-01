import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import _Select, { SelectProps as _SelectProps } from "@mui/material/Select";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { FC } from "react";

interface Option {
  label: string;
  value: string;
}

type SelectProps = Omit<_SelectProps, "children" | "onChange"> & {
  options: Option[];
  onChange: (value: string) => void;
};

const Select: FC<SelectProps> = ({ options, onChange, ...props }) => {
  const isMobile = false; // TODO
  const { name, id } = props.inputProps || {};
  return isMobile ? (
    <NativeSelect
      defaultValue={props.value}
      inputProps={{ name, id }}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </NativeSelect>
  ) : (
    <_Select {...props} onChange={(event) => onChange(event.target.value as string)}>
      {options.map((option) => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </_Select>
  );
};

export default Select;
