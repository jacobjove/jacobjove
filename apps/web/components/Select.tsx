import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import _Select, { SelectChangeEvent, SelectProps as _SelectProps } from "@mui/material/Select";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import { ChangeEvent, FC, ReactElement } from "react";

// prettier-ignore
type Option = {
  value: string;
  // Allow overriding the onChange behavior for a specific option via `onSelect`.
  onSelect?: () => void;
} & (
  // On mobile, require a string for the label (through `nativeSelectLabel` if not
  // through `label`), since we use the native select (which requires string labels).
  {
    label: string;
    nativeSelectLabel?: string;
  } | {
    label: ReactElement;
    nativeSelectLabel: string;
  }
);

type SelectProps = Omit<_SelectProps, "children" | "onChange"> & {
  options: Option[];
  onChange: (value: string) => void;
};

const Select: FC<SelectProps> = ({ options, onChange, ...props }) => {
  const { name, id } = props.inputProps || {};
  const { isMobile } = useDeviceData();
  const onSelectMap = Object.fromEntries(
    options.map((option) => {
      // Value is guaranteed to be a string and is accessible in the change events
      // of both the native select and MUI select, so we can safely use it as a key.
      return [option.value, option.onSelect];
    })
  );
  const handleChange = (event: ChangeEvent<HTMLSelectElement> | SelectChangeEvent<unknown>) => {
    event.preventDefault();
    const value = event.target.value as string;
    if (onSelectMap?.[value]) {
      (onSelectMap[value] as CallableFunction)();
    } else {
      onChange(value);
    }
  };
  return isMobile ? (
    <NativeSelect
      defaultValue={props.value}
      sx={{
        ...(props.fullWidth
          ? {
              width: "100%",
              "& > div": {
                width: "100%",
                "& > select": {
                  width: "100%",
                },
              },
            }
          : {}),
        "& select": { pl: "0.2rem" },
      }}
      inputProps={{ name, id }}
      onChange={handleChange}
    >
      {options.map((option, index) => {
        const label = option.nativeSelectLabel ?? option.label;
        return (
          <option key={index} value={option.value}>
            {label}
          </option>
        );
      })}
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
