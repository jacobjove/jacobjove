import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "@web/components/fields/cron/Cron.module.scss";
import { isValidCron } from "cron-validator";
import { useCallback, useEffect, useRef, useState } from "react";
import { getCronStringFromValues, setValuesFromCronString } from "./converter";
import Hours from "./fields/Hours";
import Minutes from "./fields/Minutes";
import MonthDays from "./fields/MonthDays";
import Months from "./fields/Months";
import Period from "./fields/Period";
import WeekDays from "./fields/WeekDays";
import { DEFAULT_LOCALE_EN } from "./locale";
import { CronProps, PeriodType } from "./types";
import { usePrevious } from "./utils";

// const cronReducer = (state: CronProps, action: { field: string; value: any }) => {
//   const { field, value } = action;
//   return {
//     ...state,
//     [field]: value,
//   };
// };

export default function Cron(props: CronProps) {
  const {
    clearButtonProps = {},
    clearButtonAction = "fill-with-every",
    locale = DEFAULT_LOCALE_EN,
    value = "",
    setValue,
    // displayError = true,
    onError,
    defaultPeriod = "day",
    allowEmpty = "for-default-value",
    humanizeLabels = true,
    humanizeValue = false,
    disabled = false,
    readOnly = false,
    shortcuts = ["@yearly", "@annually", "@monthly", "@weekly", "@daily", "@midnight", "@hourly"],
    clockFormat,
    periodicityOnDoubleClick = true,
    mode = "multiple",
    allowedDropdowns = ["period", "months", "month-days", "week-days", "hours", "minutes"],
    allowedPeriods = ["year", "month", "week", "day", "hour", "minute", "reboot"],
  } = props;
  // const date = new Date();

  const internalValueRef = useRef<string>(value);
  const defaultPeriodRef = useRef<PeriodType>(defaultPeriod);

  const [period, setPeriod] = useState<PeriodType>("day");
  const [monthDays, setMonthDays] = useState<number[] | undefined>();
  const [months, setMonths] = useState<number[] | undefined>();
  const [weekDays, setWeekDays] = useState<number[] | undefined>();
  const [hours, setHours] = useState<number[] | undefined>([12]);
  const [minutes, setMinutes] = useState<number[] | undefined>([0]);
  const [error, setInternalError] = useState<boolean>(false);
  const [valueCleared, setValueCleared] = useState<boolean>(false);

  const previousValueCleared = usePrevious(valueCleared);

  const localeJSON = JSON.stringify(locale);

  useEffect(
    () => {
      if (value !== internalValueRef.current) {
        setValuesFromCronString(
          value,
          setInternalError,
          onError,
          allowEmpty,
          internalValueRef,
          false,
          locale,
          shortcuts,
          setMinutes,
          setHours,
          setMonthDays,
          setMonths,
          setWeekDays,
          setPeriod
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, internalValueRef, localeJSON, allowEmpty, shortcuts]
  );

  useEffect(
    () => {
      // Only change the value if a user touched a field
      // and if the user didn't use the clear button
      if (
        (period || minutes || months || monthDays || weekDays || hours) &&
        !valueCleared &&
        !previousValueCleared
      ) {
        const selectedPeriod = period || defaultPeriodRef.current;
        const cron = getCronStringFromValues(
          selectedPeriod,
          months,
          monthDays,
          weekDays,
          hours,
          minutes,
          humanizeValue
        );

        if (!isValidCron(cron)) throw new Error("Invalid cron string");
        setValue(cron, { selectedPeriod });
        internalValueRef.current = cron;
      } else if (valueCleared) {
        setValueCleared(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [period, monthDays, months, weekDays, hours, minutes, humanizeValue, valueCleared]
  );

  const handleClear = useCallback(
    () => {
      setMonthDays(undefined);
      setMonths(undefined);
      setWeekDays(undefined);
      setHours(undefined);
      setMinutes(undefined);

      // When clearButtonAction is 'empty'
      let newValue = "";

      const newPeriod = period !== "reboot" && period ? period : defaultPeriodRef.current;

      if (newPeriod !== period) {
        setPeriod(newPeriod);
      }

      // When clearButtonAction is 'fill-with-every'
      if (clearButtonAction === "fill-with-every") {
        const cron = getCronStringFromValues(
          newPeriod,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined
        );

        newValue = cron;
      }

      setValue(newValue, { selectedPeriod: newPeriod });
      internalValueRef.current = newValue;

      setValueCleared(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [period, setValue, onError, clearButtonAction]
  );

  const clearButtonNode = (
    <Button
      className={"react-js-cron-clear-button"}
      variant={"text"}
      disabled={disabled}
      {...clearButtonProps}
      onClick={handleClear}
    >
      {locale.clearButtonText || DEFAULT_LOCALE_EN.clearButtonText}
    </Button>
  );

  const periodForRender = period || defaultPeriodRef.current;

  return (
    <Box
      className={styles.root}
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        mt: 2,
        "& .MuiSelect-select": {
          p: 1,
        },
        "& .react-js-cron-field": {
          "& > span": {
            mx: 1,
          },
          alignItems: "center",
          display: "flex",
        },
      }}
    >
      {allowedDropdowns.includes("period") && (
        <Period
          value={periodForRender}
          setValue={setPeriod}
          locale={locale}
          disabled={disabled}
          readOnly={readOnly}
          shortcuts={shortcuts}
          allowedPeriods={allowedPeriods}
        />
      )}

      {periodForRender === "reboot" ? (
        clearButtonNode
      ) : (
        <>
          {periodForRender === "year" && allowedDropdowns.includes("months") && (
            <Months
              value={months}
              setValue={setMonths}
              locale={locale}
              humanizeLabels={humanizeLabels}
              disabled={disabled}
              readOnly={readOnly}
              period={periodForRender}
              periodicityOnDoubleClick={periodicityOnDoubleClick}
              mode={mode}
            />
          )}
          {(periodForRender === "year" || periodForRender === "month") &&
            allowedDropdowns.includes("month-days") && (
              <MonthDays
                value={monthDays}
                setValue={setMonthDays}
                locale={locale}
                weekDays={weekDays}
                disabled={disabled}
                readOnly={readOnly}
                period={periodForRender}
                periodicityOnDoubleClick={periodicityOnDoubleClick}
                mode={mode}
              />
            )}

          {(periodForRender === "year" ||
            periodForRender === "month" ||
            periodForRender === "week") &&
            allowedDropdowns.includes("week-days") && (
              <WeekDays
                value={weekDays}
                setValue={setWeekDays}
                locale={locale}
                humanizeLabels={humanizeLabels}
                monthDays={monthDays}
                disabled={disabled}
                readOnly={readOnly}
                period={periodForRender}
                periodicityOnDoubleClick={periodicityOnDoubleClick}
                mode={mode}
              />
            )}

          <div>
            {periodForRender !== "minute" &&
              periodForRender !== "hour" &&
              allowedDropdowns.includes("hours") && (
                <Hours
                  value={hours}
                  setValue={setHours}
                  locale={locale}
                  disabled={disabled}
                  readOnly={readOnly}
                  clockFormat={clockFormat}
                  period={periodForRender}
                  periodicityOnDoubleClick={periodicityOnDoubleClick}
                  mode={mode}
                />
              )}
            {periodForRender !== "minute" && allowedDropdowns.includes("minutes") && (
              <Minutes
                value={minutes}
                setValue={setMinutes}
                locale={locale}
                period={periodForRender}
                disabled={disabled}
                readOnly={readOnly}
                clockFormat={clockFormat}
                periodicityOnDoubleClick={periodicityOnDoubleClick}
                mode={mode}
              />
            )}
            {clearButtonNode}
          </div>
        </>
      )}
    </Box>
  );
}
