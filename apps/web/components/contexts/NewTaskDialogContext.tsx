import { useUser } from "@web/components/contexts/UserContext";
import { UserFragment } from "@web/generated/graphql/fragments/user.fragment";
import { useTaskReducer } from "@web/generated/hooks/task.hooks";
import { TaskData } from "@web/generated/reducers/task.reducer";
import { ID } from "@web/graphql/schema/types";
import { Payload } from "@web/utils/data/reduction";
import { bindTrigger, PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { createContext, Dispatch, FC, ReactNode, useContext } from "react";

type NewTaskDialogContextData = {
  newTaskDataTuple?: [TaskData, Dispatch<Payload<TaskData>>];
  newTaskDialogState?: PopupState;
  newTaskDialogTriggerProps?: ReturnType<typeof bindTrigger>;
};

const initialValue = {};

const NewTaskDialogContext = createContext<NewTaskDialogContextData>(
  initialValue as unknown as NewTaskDialogContextData
);

export default NewTaskDialogContext;

export const NewTaskDialogContextProvider: FC = ({ children }) => {
  const { user } = useUser();
  if (!user) {
    return <NewTaskDialogContext.Provider value={{}}>{children}</NewTaskDialogContext.Provider>;
  }
  return <_NewTaskDialogContextProvider user={user}>{children}</_NewTaskDialogContextProvider>;
};

interface _NewTaskDialogContextProviderProps {
  children: ReactNode;
  user: UserFragment;
}

export const _NewTaskDialogContextProvider: FC<_NewTaskDialogContextProviderProps> = ({
  children,
  user,
}: _NewTaskDialogContextProviderProps) => {
  const defaultRank = 1;
  // const greatestRank = incompleteTasks[incompleteTasks.length - 1]?.rank ?? MIN_TASK_RANK;
  // const defaultRank = Math.floor(greatestRank + Math.floor((MAX_TASK_RANK - greatestRank) / 2));
  // const [newTaskData, dispatchNewTaskData] = useReducer(
  //   taskReducer,
  //   initializeTaskData({ rank: defaultRank }),
  //   initializeTaskData
  // );
  const newTaskDataTuple = useTaskReducer({
    rank: defaultRank,
    userId: user.id as ID,
    title: "",
  });
  const newTaskDialogState = usePopupState({ variant: "popover", popupId: `new-task-dialog` });
  const newTaskDialogTriggerProps = bindTrigger(newTaskDialogState);
  const value = {
    newTaskDataTuple,
    newTaskDialogState,
    newTaskDialogTriggerProps,
  };
  return <NewTaskDialogContext.Provider value={value}>{children}</NewTaskDialogContext.Provider>;
};

export const useNewTaskDialog = () => {
  return useContext(NewTaskDialogContext);
};
