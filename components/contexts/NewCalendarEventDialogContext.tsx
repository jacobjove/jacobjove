import { useUser } from "@/components/contexts/UserContext";
import { ID } from "@/graphql/schema/types";
import {
  CalendarEventData,
  calendarEventDataReducer,
  initializeCalendarEventData,
} from "@/utils/calendarEvents";
import { PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { createContext, Dispatch, FC, useContext, useEffect, useReducer } from "react";

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
  const defaultCalendarId = user?.settings.defaultCalendarId as ID;
  const [newCalendarEventData, dispatchNewCalendarEventData] = useReducer(
    calendarEventDataReducer,
    initializeCalendarEventData({
      start: new Date(),
      calendarId: defaultCalendarId,
      userId: user?.id as ID,
    }),
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
  useEffect(() => {
    if (user?.id)
      dispatchNewCalendarEventData({
        field: "init",
        value: { start: new Date(), calendarId: defaultCalendarId, userId: user?.id as ID },
      });
  }, [user, defaultCalendarId]);
  return (
    <NewCalendarEventDialogContext.Provider value={value}>
      {children}
    </NewCalendarEventDialogContext.Provider>
  );
};

export const useNewCalendarEventDialog = () => {
  return useContext(NewCalendarEventDialogContext);
};
