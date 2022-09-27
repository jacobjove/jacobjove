import { Autocomplete, TextField, Typography } from "@mui/material";
import { DEFAULT_LOCALE_EN } from "../locale";
import { HoursProps } from "../types";

export default function Hours({ value, setValue, locale, mode }: HoursProps) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {locale.prefixHours !== "" && (
        <Typography mx={1}>{locale.prefixHours || DEFAULT_LOCALE_EN.prefixHours}</Typography>
      )}
      <Autocomplete
        value={value?.length ? value.map((v) => v.toString().padStart(2, "0")) : []}
        options={Array.from(Array(24), (x, i) => String(i).padStart(2, "0"))}
        onChange={(e, v) => setValue(v?.map((v) => Number(v)))}
        {...(mode === "multiple" && { multiple: true })}
        sx={{ display: "inline-block" }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            // onKeyDown={(e) => {
            //   if (
            //     e.key === "Enter" &&
            //     options.findIndex((o) => o.title === inputValue) === -1
            //   ) {
            //     setOptions((o) => o.concat({ title: inputValue }));
            //   }
            // }}
          />
        )}
      />
    </div>
  );
}
