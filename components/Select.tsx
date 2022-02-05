import DeviceContext from "@/components/contexts/DeviceContext";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import _Select, { SelectChangeEvent, SelectProps as _SelectProps } from "@mui/material/Select";
import { ChangeEvent, FC, ReactElement, useContext } from "react";

interface Option {
  label: string | ReactElement;
  mobileLabel?: string;
  value: string;
  onSelect?: () => void;
}

type SelectProps = Omit<_SelectProps, "children" | "onChange"> & {
  options: Option[];
  onChange: (value: string) => void;
};

const Select: FC<SelectProps> = ({ options, onChange, ...props }) => {
  const { name, id } = props.inputProps || {};
  const { isMobile } = useContext(DeviceContext);
  const onSelectMap = Object.fromEntries(
    options.map((option) => {
      // Value is guaranteed to be a string and is accessible in the change events
      // of both the native select and MUI select, so we can safely use it as a key.
      return [option.value, option.onSelect];
    })
  );
  console.log(onSelectMap);
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
        let label = option.mobileLabel ?? option.label;
        if (typeof label !== "string") {
          console.error("Encountered non-string label in native select:", label);
          // Try to extract a string from the element.
          if (label.props?.children) {
            label = label.props.children
              .map((child: string | ReactElement) => {
                if (typeof child === "string") return child;
                return;
              })
              .join("");
          }
        }
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
        <MenuItem
          key={index}
          value={option.value}
          // TODO: clean up after confirming the `handleChange` solution works well.
          // onClick={(event) => {
          //   if (option.onSelect) {
          //     event.preventDefault();
          //     // Note: Rather than stopping propagation via `event.stopPropagation()`
          //     // (which may have unforeseen consequences), we instead rely on the
          //     // Select component's `onChange` handler to ignore the change event if
          //     // the value is falsy (empty string).
          //     (option.onSelect as CallableFunction)();
          //   }
          // }}
        >
          {option.label}
        </MenuItem>
      ))}
    </_Select>
  );
};

export default Select;
