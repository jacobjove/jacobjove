import { UserFragment } from "@web/generated/graphql/fragments/user.fragment";
import { useCalendarEventReducer } from "@web/generated/hooks/calendarEvent.hooks";
import { CalendarEventData } from "@web/generated/reducers/calendarEvent.reducer";
import { ID } from "@web/graphql/schema/types";
import { Payload } from "@web/hooks/reduction";
import { PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { createContext, Dispatch, FC, ReactElement, useContext } from "react";
import { useUser } from "./UserContext";

type NewCalendarEventDialogContextData = {
  newCalendarEventDialogState?: PopupState;
  newCalendarEventDataTuple?: [CalendarEventData, Dispatch<Payload<CalendarEventData>>];
};

const initialValue = {};

const NewCalendarEventDialogContext = createContext<NewCalendarEventDialogContextData>(
  initialValue as unknown as NewCalendarEventDialogContextData
);

export default NewCalendarEventDialogContext;

interface _NewCalendarEventDialogContextProviderProps
  extends NewCalendarEventDialogContextProviderProps {
  user: UserFragment;
}
const _NewCalendarEventDialogContextProvider: FC<_NewCalendarEventDialogContextProviderProps> = ({
  user,
  children,
}: _NewCalendarEventDialogContextProviderProps) => {
  const userId = user.id;
  const calendarId = user?.settings.defaultCalendarId as ID;
  const newCalendarEventDataTuple = useCalendarEventReducer({
    title: "",
    start: new Date(),
    calendarId,
    userId,
  });
  const newCalendarEventDialogState = usePopupState({
    variant: "dialog",
    popupId: `new-calendarEvent-dialog`,
  });
  const value = {
    newCalendarEventDataTuple,
    newCalendarEventDialogState,
  };
  // console.log("Rendering NewCalendarEventDialogContextProvider");
  return (
    <NewCalendarEventDialogContext.Provider value={value}>
      {children}
    </NewCalendarEventDialogContext.Provider>
  );
};

interface NewCalendarEventDialogContextProviderProps {
  children: ReactElement;
}
export const NewCalendarEventDialogContextProvider: FC<
  NewCalendarEventDialogContextProviderProps
> = ({ children }: NewCalendarEventDialogContextProviderProps) => {
  const { user } = useUser();
  if (!user) return children;
  return (
    <_NewCalendarEventDialogContextProvider user={user}>
      {children}
    </_NewCalendarEventDialogContextProvider>
  );
};

export const useNewCalendarEventDialog = () => {
  return useContext(NewCalendarEventDialogContext);
};
