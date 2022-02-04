import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import _Select, { SelectChangeEvent, SelectProps as _SelectProps } from "@mui/material/Select";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { ChangeEvent, FC, ReactElement } from "react";

interface Option {
  label: string | ReactElement;
  value: string;
  onSelect?: () => void;
}

type SelectProps = Omit<_SelectProps, "children" | "onChange"> & {
  options: Option[];
  onChange: (value: string) => void;
};

const Select: FC<SelectProps> = ({ options, onChange, ...props }) => {
  const isMobile = false; // TODO
  const { name, id } = props.inputProps || {};
  const handleChange = (event: ChangeEvent<HTMLSelectElement> | SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    event.preventDefault();
    if (value) onChange(value);
  };
  return isMobile ? (
    <NativeSelect defaultValue={props.value} inputProps={{ name, id }} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </NativeSelect>
  ) : (
    <_Select {...props} onChange={handleChange}>
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </_Select>
  );
};

export default Select;
