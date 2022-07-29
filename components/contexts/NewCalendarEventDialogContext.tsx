import {
  CalendarEventData,
  calendarEventDataReducer,
  initializeCalendarEventData,
} from "@/utils/calendarEvents";
import { PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { createContext, Dispatch, FC, useContext, useReducer } from "react";
import { useUser } from "./UserContext";

type NewCalendarEventDialogContextData = {
  newCalendarEventData: CalendarEventData;
  dispatchNewCalendarEventData: Dispatch<{ field: string; value: unknown }>;
  newCalendarEventDialogState: PopupState;
};

const initialValue = {};

const NewCalendarEventDialogContext = createContext<NewCalendarEventDialogContextData>(
  initialValue as unknown as NewCalendarEventDialogContextData
);

export default NewCalendarEventDialogContext;

export const NewCalendarEventDialogContextProvider: FC = ({ children }) => {
  const user = useUser();
  const start = new Date();
  const defaultCalendarId = `${user?.settings.defaultCalendarId}`;
  const [newCalendarEventData, dispatchNewCalendarEventData] = useReducer(
    calendarEventDataReducer,
    initializeCalendarEventData({ start, calendarId: defaultCalendarId }),
    initializeCalendarEventData
  );
  const newCalendarEventDialogState = usePopupState({
    variant: "popover",
    popupId: `new-calendarEvent-dialog`,
  });
  const value = {
    newCalendarEventData,
    dispatchNewCalendarEventData,
    newCalendarEventDialogState,
  };
  return (
    <NewCalendarEventDialogContext.Provider value={value}>
      {children}
    </NewCalendarEventDialogContext.Provider>
  );
};

export const useNewCalendarEventDialog = () => {
  return useContext(NewCalendarEventDialogContext);
};
