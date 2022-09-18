import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconProps } from "@mui/material";
import { FC } from "react";

interface SelectionToggleIconProps extends IconProps {
  positive: boolean;
}

const SelectionToggleIcon: FC<SelectionToggleIconProps> = ({
  positive,
}: SelectionToggleIconProps) => {
  return positive ? <StarIcon /> : <StarOutlineIcon />;
};

export default SelectionToggleIcon;
