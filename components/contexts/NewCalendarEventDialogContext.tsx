import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { useCalendarEventDataReducer } from "@/graphql/generated/hooks/calendarEvent.hooks";
import { CalendarEventData } from "@/graphql/generated/reducers/calendarEvent.reducer";
import { ID } from "@/graphql/schema/types";
import { Payload } from "@/utils/data";
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
