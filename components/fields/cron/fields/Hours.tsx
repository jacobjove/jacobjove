import CustomSelect from "../components/CustomSelect";
import { UNITS } from "../constants";
import { DEFAULT_LOCALE_EN } from "../locale";
import { HoursProps } from "../types";

export default function Hours(props: HoursProps) {
  const {
    value,
    setValue,
    locale,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
    periodicityOnDoubleClick,
    mode,
  } = props;

  return (
    <div className={"react-js-cron-field react-js-cron-hours"}>
      {locale.prefixHours !== "" && (
        <span>{locale.prefixHours || DEFAULT_LOCALE_EN.prefixHours}</span>
      )}

      <CustomSelect
        placeholder={locale.emptyHours || DEFAULT_LOCALE_EN.emptyHours}
        value={value}
        unit={UNITS[1]}
        setValue={setValue}
        locale={locale}
        disabled={disabled}
        readOnly={readOnly}
        leadingZero={leadingZero}
        clockFormat={clockFormat}
        period={period}
        periodicityOnDoubleClick={periodicityOnDoubleClick}
        mode={mode}
      />
    </div>
  );
}
