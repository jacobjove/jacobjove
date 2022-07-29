import { initializeTaskData, TaskData, taskDataReducer } from "@/utils/tasks";
import { bindTrigger, PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { createContext, Dispatch, FC, useContext, useReducer } from "react";

type NewTaskDialogContextData = {
  newTaskData: TaskData;
  dispatchNewTaskData: Dispatch<{ field: string; value: unknown }>;
  newTaskDialogState: PopupState;
  newTaskDialogTriggerProps: ReturnType<typeof bindTrigger>;
};

const initialValue = {};

const NewTaskDialogContext = createContext<NewTaskDialogContextData>(
  initialValue as unknown as NewTaskDialogContextData
);

export default NewTaskDialogContext;

export const NewTaskDialogContextProvider: FC = ({ children }) => {
  const defaultRank = 1;
  const [newTaskData, dispatchNewTaskData] = useReducer(
    taskDataReducer,
    initializeTaskData({ rank: defaultRank }),
    initializeTaskData
  );
  const newTaskDialogState = usePopupState({ variant: "popover", popupId: `new-task-dialog` });
  const newTaskDialogTriggerProps = bindTrigger(newTaskDialogState);
  const value = {
    newTaskData,
    dispatchNewTaskData,
    newTaskDialogState,
    newTaskDialogTriggerProps,
  };
  return <NewTaskDialogContext.Provider value={value}>{children}</NewTaskDialogContext.Provider>;
};

export const useNewTaskDialog = () => {
  return useContext(NewTaskDialogContext);
};
