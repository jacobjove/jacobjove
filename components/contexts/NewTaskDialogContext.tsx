import { useUser } from "@/components/contexts/UserContext";
import { TaskData, taskDataReducer } from "@/graphql/schema/generated/reducers/task.reducer";
import { ID } from "@/graphql/schema/types";
import { Payload } from "@/utils/data";
import { initializeTaskData } from "@/utils/tasks";
import { bindTrigger, PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { createContext, Dispatch, FC, useContext, useEffect, useReducer } from "react";

type NewTaskDialogContextData = {
  newTaskData: TaskData;
  dispatchNewTaskData: Dispatch<Payload<TaskData>>;
  newTaskDialogState: PopupState;
  newTaskDialogTriggerProps: ReturnType<typeof bindTrigger>;
};

const initialValue = {};

const NewTaskDialogContext = createContext<NewTaskDialogContextData>(
  initialValue as unknown as NewTaskDialogContextData
);

export default NewTaskDialogContext;

export const NewTaskDialogContextProvider: FC = ({ children }) => {
  const user = useUser();
  const defaultRank = 1;
  // const greatestRank = incompleteTasks[incompleteTasks.length - 1]?.rank ?? MIN_TASK_RANK;
  // const defaultRank = Math.floor(greatestRank + Math.floor((MAX_TASK_RANK - greatestRank) / 2));
  // const [newTaskData, dispatchNewTaskData] = useReducer(
  //   taskDataReducer,
  //   initializeTaskData({ rank: defaultRank }),
  //   initializeTaskData
  // );
  const [newTaskData, dispatchNewTaskData] = useReducer(
    taskDataReducer,
    initializeTaskData({
      rank: defaultRank,
      userId: user?.id as ID,
      title: "",
    }),
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
  useEffect(() => {
    console.log(">>> userId:", user?.id);
    if (user?.id) {
      dispatchNewTaskData({
        field: "init",
        value: { title: "", rank: defaultRank, userId: user.id },
      });
    }
  }, [user]);
  return <NewTaskDialogContext.Provider value={value}>{children}</NewTaskDialogContext.Provider>;
};

export const useNewTaskDialog = () => {
  return useContext(NewTaskDialogContext);
};
