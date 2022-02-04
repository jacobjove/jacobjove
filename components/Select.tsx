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
  const handleChange = (event: ChangeEvent<HTMLSelectElement> | SelectChangeEvent<unknown>) => {
    console.log(event.target);
    const value = event.target.value as string;
    event.preventDefault();
    if (value) onChange(value);
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
        // TODO: figure out a way to use onSelect with native select
        if (option.onSelect) {
          console.log(option);
          return;
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
          onClick={(event) => {
            if (option.onSelect) {
              event.preventDefault();
              event.stopPropagation();
              (option.onSelect as CallableFunction)();
            }
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </_Select>
  );
};

export default Select;
