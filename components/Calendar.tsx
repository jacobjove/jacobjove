import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AllDayPanel,
  AppointmentTooltip,
  AppointmentForm,
  // GroupingPanel,
  // Resources,
} from "@devexpress/dx-react-scheduler-material-ui";
import { FC, FormEventHandler, useState } from "react";

interface CalendarProps {
  initialDate: string | Date; // e.g., '2022-01-01'
  data: any;
}

const Calendar: FC<CalendarProps> = (props: CalendarProps) => {
  const { initialDate, data } = props;
  const [currentViewName, setCurrentViewName] = useState("Day");
  const [currentDate, setCurrentDate] = useState(initialDate);
  return (
    <Scheduler data={data}>
      <ViewState
        currentDate={currentDate}
        currentViewName={currentViewName}
        onCurrentViewNameChange={setCurrentViewName}
        onCurrentDateChange={setCurrentDate}
      />
      <DayView startDayHour={7} endDayHour={20} />
      <WeekView startDayHour={7} endDayHour={20} />
      <AllDayPanel />
      <Appointments />
      <Toolbar />
      <DateNavigator />
      <ViewSwitcher />
      <AppointmentTooltip showOpenButton showCloseButton />
      <AppointmentForm readOnly />
    </Scheduler>
  );
};

export default Calendar;
