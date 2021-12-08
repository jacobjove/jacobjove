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
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { FC, useState } from "react";
import { ViewState, EditingState, IntegratedEditing } from "@devexpress/dx-react-scheduler";

interface CalendarProps {
  date: string | Date; // e.g., '2022-01-01'
  data: any;
}

const _Calendar: FC<CalendarProps> = (props: CalendarProps) => {
  const { date: initialDate, data: initialData } = props;
  const [data, setData] = useState(initialData);
  const [currentViewName, setCurrentViewName] = useState("Day");
  const [currentDate, setCurrentDate] = useState(initialDate);
  const commitChanges = ({ added, changed, deleted }: any) => {
    let result = [...data];
    if (added) {
      result.push(added);
    }
    if (changed) {
      result = result.map((appointment: any) =>
        appointment.id === changed.id ? changed : appointment
      );
    }
    if (deleted !== undefined) {
      result = result.filter((appointment: any) => appointment.id !== deleted.id);
    }
    setData(result);
  };
  return (
    <Scheduler data={data}>
      <ViewState
        currentDate={currentDate}
        currentViewName={currentViewName}
        onCurrentViewNameChange={setCurrentViewName}
        onCurrentDateChange={setCurrentDate}
      />
      <EditingState onCommitChanges={commitChanges} />
      <IntegratedEditing />
      <DayView startDayHour={7} endDayHour={20} />
      <WeekView startDayHour={7} endDayHour={20} />
      <AllDayPanel />
      <ConfirmationDialog />
      <Appointments />
      <Toolbar />
      <DateNavigator />
      <ViewSwitcher />
      <AppointmentTooltip showOpenButton showCloseButton />
      <AppointmentForm />
    </Scheduler>
  );
};

export default _Calendar;
