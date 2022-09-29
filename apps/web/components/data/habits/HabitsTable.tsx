import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { useUser } from "@web/components/contexts/UserContext";
import DataTable from "@web/components/tables/Table";
import { HabitFragment } from "@web/generated/graphql/fragments/habit.fragment";
import { getOptimisticResponseForHabitCreation } from "@web/generated/graphql/mutations/habit.mutations";
import { habitCreationInputSchema } from "@web/generated/graphql/schemas/habit.schemas";
import {
  useCreateHabit,
  useHabitReducer,
  useHabitsReducer,
} from "@web/generated/hooks/habit.hooks";
import cronstrue from "cronstrue";
import { FC, useState } from "react";

const HabitsTable: FC = () => {
  const { user } = useUser();
  const [create] = useCreateHabit();
  const [habits, dispatchHabits] = useHabitsReducer(user?.habits ?? []);

  const [addingNewHabit, setAddingNewHabit] = useState(false);

  const [newHabitData, dispatchNewHabitData] = useHabitReducer();

  const onDropRow = (_dropIndex: number) => alert("Not implemented yet");

  // TODO
  const moveRow = (_draggedItem: HabitFragment, _hoveredItem: HabitFragment) => _draggedItem;

  const onSaveNewHabit = async () => {
    const data = await habitCreationInputSchema.validate(newHabitData);
    const optimisticResponse = getOptimisticResponseForHabitCreation(data);
    create
      .current?.({ variables: { data }, optimisticResponse }, { skipValidation: true })
      .then(() => {
        dispatchNewHabitData({
          field: "init",
          value: {},
        });
      });
    setAddingNewHabit(false);
    dispatchHabits({
      type: "append",
      payload: optimisticResponse.createHabit,
    });
  };
  return (
    <TableContainer
      className="no-scrollbar"
      sx={{
        height: "100%",
        maxHeight: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        "& .MuiPaper-root": {
          margin: 0,
          flexGrow: 1,
        },
      }}
    >
      <DataTable<HabitFragment>
        dataTuple={[habits, dispatchHabits]}
        addingNewItem={addingNewHabit}
        setAddingNewItem={setAddingNewHabit}
        onDropRow={onDropRow}
        moveRow={moveRow}
        newItemDataTuple={[newHabitData, dispatchNewHabitData]}
        onSaveNewItem={onSaveNewHabit}
        titleField={"name"}
        headers={[{ label: "Name" }, { label: "Schedule" }]}
        RowContent={HabitRowContent}
      />
    </TableContainer>
  );
};

const HabitRowContent: FC<{ item: HabitFragment }> = ({ item }) => {
  return (
    <>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.cron ? cronstrue.toString(item.cron) : ""}</TableCell>
    </>
  );
};

export default HabitsTable;
