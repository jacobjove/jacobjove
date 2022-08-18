import NotesIcon from "@mui/icons-material/Notes";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";
import { Dispatch, useState } from "react";

interface FieldConfig<Name extends string> {
  name: Name;
  label: string;
  fontSizeRem?: number;
}

interface TitleAndDescriptionFieldsProps<
  TitlePropName extends string,
  DescriptionPropName extends string
> {
  titleConfig: FieldConfig<TitlePropName>;
  descriptionConfig: FieldConfig<DescriptionPropName>;
  editingState: [boolean, Dispatch<boolean>];
  includeIcon?: boolean;
  dataTuple: [
    { [key in TitlePropName]?: string | null } & { [key in DescriptionPropName]?: string | null },
    Dispatch<any>
  ];
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
}

// const TitleAndDescriptionStateProvider: FC = ({ children }) => {
//   return children;
// };

// const TitleAndDescriptionEditingStateProvider: FC = ({ children }) => {
//   return children;
// };

// const TitleAndDescriptionDataStateProvider: FC = ({ children }) => {
//   return children;
// };

export default function TitleAndDescriptionFields<
  TitlePropName extends string,
  DescriptionPropName extends string
>({
  titleConfig,
  descriptionConfig,
  editingState,
  dataTuple,
  includeIcon: _includeIcon,
  onKeyUp: _onKeyUp,
  sx,
}: TitleAndDescriptionFieldsProps<TitlePropName, DescriptionPropName>) {
  const [editing, setEditing] = editingState;
  // const editing = true;
  const [data, dispatchData] = dataTuple;
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const { name: titleName, label: titleLabel, fontSizeRem: _titleFontSizeRem } = titleConfig;
  const {
    name: descriptionName,
    label: descriptionLabel,
    fontSizeRem: _descriptionFontSizeRem,
  } = descriptionConfig;
  const includeIcon = _includeIcon ?? true;
  const titleFontSizeRem = _titleFontSizeRem || 1.5;
  const titleFontSize = `${titleFontSizeRem}rem`;
  const descriptionFontSize = _descriptionFontSizeRem ?? `${titleFontSizeRem * 0.75}rem`;
  console.log(descriptionFontSize);
  const onKeyUp =
    _onKeyUp ??
    ((event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        console.error("Handle enter key");
      } else if (event.key === "Escape") {
        event.preventDefault();
        setEditing(false);
      }
    });
  return (
    <Box sx={{ ...(sx ?? {}) }}>
      <Box>
        {editing ? (
          <TextField
            autoFocus
            id="title"
            name={titleName ?? "title"}
            placeholder={titleLabel ?? "Title"}
            value={data[titleName] ?? ""}
            onChange={(event) => dispatchData({ field: "title", value: event.target.value })}
            onKeyUp={onKeyUp}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ width: "100%", "& *": { p: 0, fontSize: titleFontSize } }}
          />
        ) : (
          <Typography
            component={"h1"}
            sx={{ fontSize: titleFontSize }}
            onClick={() => setEditing(true)}
          >
            {data[titleName] ?? ""}
          </Typography>
        )}
      </Box>
      <Box
        display="flex"
        sx={{
          alignItems: "center",
          fontSize: descriptionFontSize,
          color: (theme) =>
            theme.palette.mode === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
        }}
        onClick={() => setEditing(true)}
      >
        {includeIcon && !data[descriptionName] && !descriptionFocused && (
          <NotesIcon sx={{ mr: 1 }} />
        )}
        {editing ? (
          <TextField
            id="description"
            name={descriptionName ?? "description"}
            placeholder={descriptionLabel ?? "Description"}
            multiline
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ "& *": { p: 0, mt: "0.05rem", fontSize: descriptionFontSize } }}
            value={data[descriptionName] ?? ""}
            onFocus={() => setDescriptionFocused(true)}
            onBlur={() => setDescriptionFocused(false)}
            onChange={(event) => dispatchData({ field: "description", value: event.target.value })}
            onKeyUp={onKeyUp}
          />
        ) : (
          <Typography fontSize={descriptionFontSize}>
            {data[descriptionName] || "Description"}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
