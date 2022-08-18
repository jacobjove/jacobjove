import NotesIcon from "@mui/icons-material/Notes";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";
import { Dispatch, useState } from "react";

interface TitleAndDescriptionFieldsProps<
  TitlePropName extends string,
  DescriptionPropName extends string
> {
  titlePropName: TitlePropName;
  descriptionPropName: DescriptionPropName;
  titleFontSizeRem?: number;
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
  titlePropName,
  descriptionPropName,
  editingState,
  dataTuple,
  includeIcon: _includeIcon,
  titleFontSizeRem: _titleFontSizeRem,
  onKeyUp: _onKeyUp,
  sx,
}: TitleAndDescriptionFieldsProps<TitlePropName, DescriptionPropName>) {
  const [editing, setEditing] = editingState;
  // const editing = true;
  const [data, dispatchData] = dataTuple;
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const includeIcon = _includeIcon ?? true;
  const titleFontSizeRem = _titleFontSizeRem || 1.5;
  const titleFontSize = `${titleFontSizeRem}rem`;
  const descriptionFontSize = `${titleFontSizeRem * 0.8}rem`;
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
            name={titlePropName}
            placeholder={"Title"}
            value={data[titlePropName] ?? ""}
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
            {data[titlePropName] ?? ""}
          </Typography>
        )}
      </Box>
      <Box
        display="flex"
        sx={{
          mt: 1,
          mb: 2,
          alignItems: "center",
          fontSize: descriptionFontSize,
          color: (theme) =>
            theme.palette.mode === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
        }}
        onClick={() => setEditing(true)}
      >
        {includeIcon && !data[descriptionPropName] && !descriptionFocused && (
          <NotesIcon sx={{ mr: 1 }} />
        )}
        {editing ? (
          <TextField
            id="description"
            name="description"
            placeholder="Description"
            multiline
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ "& *": { p: 0, fontSize: descriptionFontSize } }}
            value={data[descriptionPropName] ?? ""}
            onFocus={() => setDescriptionFocused(true)}
            onBlur={() => setDescriptionFocused(false)}
            onChange={(event) => dispatchData({ field: "description", value: event.target.value })}
            onKeyUp={onKeyUp}
          />
        ) : (
          <Typography fontSize={descriptionFontSize}>
            {data[descriptionPropName] || "Description"}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
