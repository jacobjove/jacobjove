import { MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useCallback } from "react";
import { DEFAULT_LOCALE_EN } from "../locale";
import { PeriodProps, PeriodType } from "../types";

type PeriodOption = {
  value: PeriodType;
  label: string;
};

export default function Period(props: PeriodProps) {
  const { value, setValue, locale, disabled, readOnly, shortcuts, allowedPeriods } = props;
  const options: PeriodOption[] = [];

  if (allowedPeriods.includes("year")) {
    options.push({
      value: "year",
      label: locale.yearOption || DEFAULT_LOCALE_EN.yearOption,
    });
  }

  if (allowedPeriods.includes("month")) {
    options.push({
      value: "month",
      label: locale.monthOption || DEFAULT_LOCALE_EN.monthOption,
    });
  }

  if (allowedPeriods.includes("week")) {
    options.push({
      value: "week",
      label: locale.weekOption || DEFAULT_LOCALE_EN.weekOption,
    });
  }

  if (allowedPeriods.includes("day")) {
    options.push({
      value: "day",
      label: locale.dayOption || DEFAULT_LOCALE_EN.dayOption,
    });
  }

  if (allowedPeriods.includes("hour")) {
    options.push({
      value: "hour",
      label: locale.hourOption || DEFAULT_LOCALE_EN.hourOption,
    });
  }

  if (allowedPeriods.includes("minute")) {
    options.push({
      value: "minute",
      label: locale.minuteOption || DEFAULT_LOCALE_EN.minuteOption,
    });
  }

  if (
    allowedPeriods.includes("reboot") &&
    shortcuts &&
    (shortcuts === true || shortcuts.includes("@reboot"))
  ) {
    options.push({
      value: "reboot",
      label: locale.rebootOption || DEFAULT_LOCALE_EN.rebootOption,
    });
  }

  const handleChange = useCallback(
    (event: SelectChangeEvent<PeriodType>) => {
      if (!readOnly) {
        setValue(event.target.value as PeriodType);
      }
    },
    [setValue, readOnly]
  );

  return (
    <div className={"react-js-cron-field react-js-cron-period"}>
      {locale.prefixPeriod !== "" && (
        <Typography mx={1}>{locale.prefixPeriod || DEFAULT_LOCALE_EN.prefixPeriod}</Typography>
      )}
      <Select<PeriodType>
        key={JSON.stringify(locale)}
        variant={"standard"}
        defaultValue={value}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        open={readOnly ? false : undefined}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
