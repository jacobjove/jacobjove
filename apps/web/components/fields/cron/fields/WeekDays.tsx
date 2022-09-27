import { Autocomplete, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { DEFAULT_LOCALE_EN } from "../locale";
import { WeekDaysProps } from "../types";

export default function WeekDays(props: WeekDaysProps) {
  const { value, setValue, locale, monthDays, readOnly, period, mode } = props;
  const optionsList = locale.weekDays || DEFAULT_LOCALE_EN.weekDays;
  const noMonthDays = period === "week" || !monthDays || monthDays.length === 0;

  const localeJSON = JSON.stringify(locale);
  const placeholder = useMemo(
    () => {
      if (noMonthDays) {
        return locale.emptyWeekDays || DEFAULT_LOCALE_EN.emptyWeekDays;
      }

      return locale.emptyWeekDaysShort || DEFAULT_LOCALE_EN.emptyWeekDaysShort;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [noMonthDays, localeJSON]
  );

  const displayWeekDays =
    period === "week" ||
    !readOnly ||
    (value && value.length > 0) ||
    ((!value || value.length === 0) && (!monthDays || monthDays.length === 0));

  const monthDaysIsDisplayed =
    !readOnly ||
    (monthDays && monthDays.length > 0) ||
    ((!monthDays || monthDays.length === 0) && (!value || value.length === 0));

  return displayWeekDays ? (
    <div>
      {locale.prefixWeekDays !== "" && (period === "week" || !monthDaysIsDisplayed) && (
        <Typography mx={1}>{locale.prefixWeekDays || DEFAULT_LOCALE_EN.prefixWeekDays}</Typography>
      )}

      {locale.prefixWeekDaysForMonthAndYearPeriod !== "" &&
        period !== "week" &&
        monthDaysIsDisplayed && (
          <Typography mx={1}>
            {locale.prefixWeekDaysForMonthAndYearPeriod ||
              DEFAULT_LOCALE_EN.prefixWeekDaysForMonthAndYearPeriod}
          </Typography>
        )}
      <Autocomplete
        value={value?.map((v) => optionsList[v])}
        options={optionsList}
        onChange={(e, v) => setValue(v?.map((v) => optionsList.indexOf(v)))}
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
  ) : null;
}
