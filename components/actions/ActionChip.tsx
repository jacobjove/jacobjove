import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import DateContext from "@/components/DateContext";
import { CREATE_ACTION_COMPLETION, UPDATE_ACTION_COMPLETION } from "@/graphql/mutations";
import { Action } from "@/graphql/schema";
import { useMutation } from "@apollo/client";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";
import StopIcon from "@mui/icons-material/Stop";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isSameDay, parseISO } from "date-fns";
import { useSession } from "next-auth/react";
// import Link from "next/link";
import React, { FC, useContext, useState } from "react";
import { useDrag } from "react-dnd";

const USE_CIRCLE_ICONS = false;

interface ActionChipProps {
  action: Action;
}

const ActionChip: FC<ActionChipProps> = (props: ActionChipProps) => {
  const { action } = props;
  const { data: session } = useSession();
  const today = useContext(DateContext);
  const completionsToday = action.completions
    ?.filter((completion) => {
      return isSameDay(parseISO(completion.date), today);
    })
    ?.sort((a, b) => {
      return parseISO(a.date) > parseISO(b.date) ? 1 : -1;
    });
  const completion = completionsToday?.[0];
  if (completionsToday?.length) {
    console.log(">>>", action.name, completionsToday);
  }
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [actionInProgress, setActionInProgress] = useState(false);
  const [expanded, setExpanded] = useState(isMobile ? false : true);
  const completed = Boolean(completion && !completion.archivedAt);
  const schedule = action.schedules[0]; // TODO
  const [createActionCompletion, { loading: createActionCompletionLoading }] =
    useMutation(CREATE_ACTION_COMPLETION);
  const [updateActionCompletion, { loading: updateActionCompletionLoading }] =
    useMutation(UPDATE_ACTION_COMPLETION);
  const loading = createActionCompletionLoading || updateActionCompletionLoading;
  const toggleActionCompletion = (on: boolean) => {
    if (!session?.user.id) {
      return;
    }
    if (loading) {
      console.log("WARNING: ActionChip: toggleActionCompletion: loading");
    }
    const archivedAt = on ? undefined : new Date().toISOString();
    if (on && !completion && session?.user.id) {
      console.log("Trying to create action completion...", on, session?.user.id);
      const completionDate = new Date().toISOString();
      createActionCompletion({
        variables: {
          data: {
            date: completionDate,
            action: { connect: { id: action.id } }, // hehe...
          },
        },
        optimisticResponse: {
          __typename: "Mutation",
          createActionCompletion: {
            __typename: "ActionCompletion",
            id: -1,
            date: completionDate,
            actionId: action.id,
            action: {
              ...action,
            },
            // actionId: action.template.id,
            archivedAt: archivedAt ?? null,
          },
        },
      }).catch((error) => {
        console.error(error);
      });
    } else if (completion) {
      console.log(on, completion, session?.user.id);
      updateActionCompletion({
        variables: {
          where: { id: completion.id },
          data: {
            // For now, we assume that re-checking an action as complete (after it was
            // previously checked but then unchecked) means undoing the uncheck;
            // i.e., we don't need to modify the completion date.
            // date: completion.date,
            archivedAt: { set: archivedAt },
          },
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateActionCompletion: {
            ...completion,
            __typename: "ActionCompletion",
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
    type: "action",
    item: {
      type: "action",
      title: action.name,
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
              toggleActionCompletion(!completed);
            }}
          />
          <Typography fontSize="0.9rem">
            {`${action.name}`}
            {/* <Link href={`/app/users/${session.user.name}`} passHref>
              <StyledAnchor>{`${action.name}`}</StyledAnchor>
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
          {!!action.actions?.length && (
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
          )}
        </Box>
        <Box display="flex" alignItems="center" marginLeft="auto">
          {(!actionInProgress && (
            <IconButton
              title={`Begin ${action.name}`}
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
            title={`Edit ${action.name}`}
            onClick={() => {
              console.log("edit action");
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
      <Collapse in={expanded}>
        {!!action.actions?.length &&
          action.actions.map((routineAction) => {
            if (!routineAction.action) {
              return null;
            }
            return (
              <Box
                key={routineAction.action.id}
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
                  {routineAction.action?.name}
                </Typography>
                {routineAction.durationInMinutes && (
                  <Typography display={"block"} fontSize="0.8rem">
                    {routineAction.durationInMinutes} minutes
                  </Typography>
                )}
              </Box>
            );
          })}
      </Collapse>
    </Box>
  );
};

export default ActionChip;
