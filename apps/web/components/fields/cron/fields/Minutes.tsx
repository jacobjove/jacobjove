import { Autocomplete, TextField, Typography } from "@mui/material";
import { DEFAULT_LOCALE_EN } from "../locale";
import { MinutesProps } from "../types";

export default function Minutes({ value, setValue, locale, period, mode }: MinutesProps) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {period === "hour"
        ? locale.prefixMinutesForHourPeriod !== "" && (
            <Typography mx={2}>
              {locale.prefixMinutesForHourPeriod || DEFAULT_LOCALE_EN.prefixMinutesForHourPeriod}
            </Typography>
          )
        : locale.prefixMinutes !== "" && (
            <Typography mx={1}>
              {locale.prefixMinutes || DEFAULT_LOCALE_EN.prefixMinutes}
            </Typography>
          )}
      <Autocomplete
        value={value?.length ? value.map((v) => v.toString().padStart(2, "0")) : []}
        options={Array.from(Array(60), (x, i) => String(i).padStart(2, "0"))}
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
      {period === "hour" && locale.suffixMinutesForHourPeriod !== "" && (
        <Typography mx={1}>
          {locale.suffixMinutesForHourPeriod || DEFAULT_LOCALE_EN.suffixMinutesForHourPeriod}
        </Typography>
      )}
    </div>
  );
}
