import { useCalendarEventDataReducer } from "@/generated/hooks/calendarEvent.hooks";
import { CalendarEventData } from "@/generated/reducers/calendarEvent.reducer";
import { ID } from "@/graphql/schema/types";
import { Payload } from "@/utils/data";
import { PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { createContext, Dispatch, FC, useContext } from "react";
import { useUser } from "./UserContext";

type NewCalendarEventDialogContextData = {
  newCalendarEventDialogState: PopupState;
  newCalendarEventDataTuple: [CalendarEventData, Dispatch<Payload<CalendarEventData>>];
};

const initialValue = {};

const NewCalendarEventDialogContext = createContext<NewCalendarEventDialogContextData>(
  initialValue as unknown as NewCalendarEventDialogContextData
);

export default NewCalendarEventDialogContext;

export const NewCalendarEventDialogContextProvider: FC = ({ children }) => {
  const user = useUser();
  const userId = user?.id as ID;
  const calendarId = user?.settings.defaultCalendarId as ID;
  const newCalendarEventDataTuple = useCalendarEventDataReducer({
    title: "",
    start: new Date(),
    calendarId,
    userId,
  });
  const newCalendarEventDialogState = usePopupState({
    variant: "popover",
    popupId: `new-calendarEvent-dialog`,
  });
  const value = {
    newCalendarEventDataTuple,
    newCalendarEventDialogState,
  };
  console.log("Rendering NewCalendarEventDialogContextProvider");
  return (
    <NewCalendarEventDialogContext.Provider value={value}>
      {children}
    </NewCalendarEventDialogContext.Provider>
  );
};

export const useNewCalendarEventDialog = () => {
  return useContext(NewCalendarEventDialogContext);
};
