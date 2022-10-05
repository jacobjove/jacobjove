import { Typography } from "@mui/material";
import { useMemo } from "react";
import CustomSelect from "../components/CustomSelect";
import { UNITS } from "../constants";
import { DEFAULT_LOCALE_EN } from "../locale";
import { MonthDaysProps } from "../types";

export default function MonthDays(props: MonthDaysProps) {
  const {
    value,
    setValue,
    locale,
    className,
    weekDays,
    disabled,
    readOnly,
    period,
    periodicityOnDoubleClick,
    mode,
  } = props;
  const noWeekDays = !weekDays || weekDays.length === 0;

  const localeJSON = JSON.stringify(locale);
  const placeholder = useMemo(
    () => {
      if (noWeekDays) {
        return locale.emptyMonthDays || DEFAULT_LOCALE_EN.emptyMonthDays;
      }

      return locale.emptyMonthDaysShort || DEFAULT_LOCALE_EN.emptyMonthDaysShort;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [noWeekDays, localeJSON]
  );

  const displayMonthDays =
    !readOnly ||
    (value && value.length > 0) ||
    ((!value || value.length === 0) && (!weekDays || weekDays.length === 0));

  return displayMonthDays ? (
    <div>
      {locale.prefixMonthDays !== "" && (
        <Typography mx={1}>
          {locale.prefixMonthDays || DEFAULT_LOCALE_EN.prefixMonthDays}
        </Typography>
      )}

      <CustomSelect
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        unit={UNITS[2]}
        locale={locale}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        period={period}
        periodicityOnDoubleClick={periodicityOnDoubleClick}
        mode={mode}
      />
    </div>
  ) : null;
}
