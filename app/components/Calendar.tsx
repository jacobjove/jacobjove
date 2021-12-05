import { ViewState, GroupingState, IntegratedGrouping } from "@devexpress/dx-react-scheduler";
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
  GroupingPanel,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";
import { connectProps } from "@devexpress/dx-react-core";
import { withStyles, makeStyles, fade } from "@material-ui/core/styles";
import PriorityHigh from "@material-ui/icons/PriorityHigh";
import LowPriority from "@material-ui/icons/LowPriority";
import Lens from "@material-ui/icons/Lens";
import Event from "@material-ui/icons/Event";
import AccessTime from "@material-ui/icons/AccessTime";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import classNames from "clsx";
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
