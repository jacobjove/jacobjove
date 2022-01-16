import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import DateContext from "@/components/DateContext";
import { CREATE_ACTION, UPDATE_ACTION } from "@/graphql/mutations";
import { Habit } from "@/graphql/schema";
import { useMutation } from "@apollo/client";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";
import StopIcon from "@mui/icons-material/Stop";
import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isSameDay, parseISO } from "date-fns";
import { useSession } from "next-auth/react";
// import Link from "next/link";
import React, { FC, useContext, useState } from "react";
import { useDrag } from "react-dnd";

interface HabitChipProps {
  habit: Habit;
}

const HabitChip: FC<HabitChipProps> = (props: HabitChipProps) => {
  const { habit } = props;
  const { data: session } = useSession();
  const today = useContext(DateContext);
  const actionsToday = habit.actions
    ?.filter((action) => {
      return isSameDay(parseISO(action.start), today);
    })
    ?.sort((a, b) => {
      return parseISO(a.start) > parseISO(b.start) ? 1 : -1;
    });
  const action = actionsToday?.[0];
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [actionInProgress, setActionInProgress] = useState(false);
  const [expanded, setExpanded] = useState(isMobile ? false : true);
  const completed = Boolean(action && !action.archivedAt);
  const schedule = habit.schedules[0]; // TODO
  const [createAction, { loading: createActionLoading }] = useMutation(CREATE_ACTION);
  const [updateAction, { loading: updateActionLoading }] = useMutation(UPDATE_ACTION);
  const loading = createActionLoading || updateActionLoading;
  const toggleAction = (on: boolean) => {
    if (!session?.user.id) {
      return;
    }
    if (loading) {
      console.log("WARNING: HabitChip: toggleAction: loading");
    }
    const archivedAt = on ? undefined : new Date().toISOString();
    if (on && !action && session?.user.id) {
      const actionDate = new Date().toISOString();
      createAction({
        variables: {
          data: {
            date: actionDate,
            habit: { connect: { id: habit.id } }, // hehe...
          },
        },
        optimisticResponse: {
          __typename: "Mutation",
          createAction: {
            __typename: "Action",
            id: -1,
            date: actionDate,
            habitId: habit.id,
            habit: {
              ...habit,
            },
            // habitId: habit.act.id,
            archivedAt: archivedAt ?? null,
          },
        },
      }).catch((error) => {
        console.error(error);
      });
    } else if (action) {
      console.log(on, action, session?.user.id);
      updateAction({
        variables: {
          where: { id: action.id },
          data: {
            // For now, we assume that re-checking an action as complete (after it was
            // previously checked but then unchecked) means undoing the uncheck;
            // i.e., we don't need to modify the action date.
            // date: action.date,
            archivedAt: { set: archivedAt },
          },
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateAction: {
            ...action,
            __typename: "Action",
            action: {
              ...action,
            },
            archivedAt: archivedAt ?? null,
          },
        },
      });
    }
  };
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "habit",
    item: {
      type: "action",
      title: habit.name,
      scheduleId: schedule?.id ?? null,
      calendarId: session?.user?.settings?.defaultCalendarId,
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  const handleScheduleIconClick = () => {
    console.info("You clicked the schedule icon.");
  };
  return (
    <Box
      ref={dragRef}
      sx={{
        opacity,
        position: "relative",
        margin: "0.25rem",
        // paddingX: "0.5rem",
        height: "auto",
        maxHeight: "auto",
        borderRadius: "3px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backgroundColor: "rgba(0, 0, 0, 0.08)",
      }}
    >
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
        <Box display="flex" alignItems="center">
          <CompletionCheckbox
            checked={completed}
            disabled={loading}
            onClick={() => {
              console.log("checkbox click -->", !completed);
              toggleAction(!completed);
            }}
          />
          <Typography fontSize="0.9rem">
            {`${habit.name}`}
            {/* <Link href={`/app/users/${session.user.name}`} passHref>
              <StyledAnchor>{`${habit.name}`}</StyledAnchor>
            </Link> */}
          </Typography>
          {schedule && (
            <IconButton
              title={`every ${schedule.frequency.toLowerCase()}`}
              onClick={handleScheduleIconClick}
              style={{ marginLeft: "auto" }}
            >
              <RepeatIcon sx={{ color: "gray", fontSize: "1rem" }} />
            </IconButton>
          )}
          {/* {!!habit.actions?.length && (
            <IconButton
              title={`${expanded ? "Collapse routine" : "Expand routine"}`}
              sx={{
                marginLeft: "0.33rem",
                backgroundColor: USE_CIRCLE_ICONS ? "white" : "transparent",
                backgroundOrigin: "content-box",
              }}
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          )} */}
        </Box>
        <Box display="flex" alignItems="center" marginLeft="auto">
          {(!actionInProgress && (
            <IconButton
              title={`Begin ${habit.name}`}
              onClick={() => {
                setActionInProgress(true);
              }}
            >
              <PlayArrowIcon />
            </IconButton>
          )) || (
            <IconButton
              title="Stop action"
              onClick={() => {
                setActionInProgress(false);
              }}
            >
              <StopIcon />
            </IconButton>
          )}
          <IconButton
            title={`Edit ${habit.name}`}
            onClick={() => {
              console.log("edit habit");
            }}
          >
            <EditIcon />
          </IconButton>
          <DragIndicatorIcon
            sx={{
              "&:hover": { cursor: "grab" },
              color: "gray",
            }}
          />
        </Box>
      </Box>
      {/* {action.defaultDurationInMinutes && (
        <Typography component={"small"}>{action.defaultDurationInMinutes} min</Typography>
      )} */}
      {/* <Collapse in={expanded}>
        {!!habit.actions?.length &&
          habit.actions.map((routineHabit) => {
            if (!routineHabit.action) {
              return null;
            }
            return (
              <Box
                key={routineHabit.action.id}
                bgcolor={"rgba(255, 255, 255, 0.5);"}
                border={"1px solid rgba(255, 255, 255, 0.2);"}
                borderRadius="3px"
                padding="0.25rem 0.5rem"
                margin="0.25rem"
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography display={"block"} fontSize="0.8rem">
                  {routineHabit.action?.name}
                </Typography>
                {routineHabit.durationInMinutes && (
                  <Typography display={"block"} fontSize="0.8rem">
                    {routineHabit.durationInMinutes} minutes
                  </Typography>
                )}
              </Box>
            );
          })}
      </Collapse> */}
    </Box>
  );
};

export default HabitChip;
