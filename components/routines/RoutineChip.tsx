import { Routine } from "@/graphql/schema";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { useDrag } from "react-dnd";

interface RoutineChipProps {
  routine: Routine;
}

const RoutineChip: FC<RoutineChipProps> = ({ routine }) => {
  const { data: session } = useSession();
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "routine",
    item: {
      type: "routine",
      title: routine.name,
      duration: routine.durationInMinutes,
      calendarId: session?.user?.settings?.defaultCalendarId,
      notes: `
        ${routine.routineActions.map((routineAction) => {
          return routineAction.action.name;
        })}
      `,
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  return (
    <Box
      bgcolor={"rgba(0, 0, 0, 0.08)"}
      borderRadius="3px"
      padding="0.5rem"
      margin="0.25rem"
      ref={dragRef}
      sx={{ opacity }}
    >
      <Typography variant="h5" title={routine.description ?? ""}>
        {routine.name}
      </Typography>
      <div>
        {routine.routineActions.length ? (
          routine.routineActions.map((routineAction) => (
            <Box
              key={routineAction.id}
              bgcolor={"rgba(255, 255, 255, 0.5);"}
              border={"1px solid rgba(255, 255, 255, 0.2);"}
              borderRadius="3px"
              padding="0.5rem"
              margin="0.25rem"
            >
              {routineAction.action.name}, {routineAction.durationInMinutes} minutes
            </Box>
          ))
        ) : (
          <span>No actions</span>
        )}
      </div>
    </Box>
  );
};

export default RoutineChip;
