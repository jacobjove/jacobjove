import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import { CREATE_ACTION_COMPLETION, UPDATE_ACTION_COMPLETION } from "@/graphql/mutations";
import { ActionCompletion, UserAction } from "@/graphql/schema";
import { useMutation } from "@apollo/client";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import RepeatIcon from "@mui/icons-material/Repeat";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC } from "react";
import { useDrag } from "react-dnd";

interface ActionChipProps {
  userAction: UserAction;
  actionCompletion?: ActionCompletion;
}

const ActionChip: FC<ActionChipProps> = (props: ActionChipProps) => {
  const { userAction, actionCompletion } = props;
  if (actionCompletion && actionCompletion.action.id !== userAction.action.id) {
    throw new Error("ActionChip: actionCompletion.action.id !== userAction.action.id");
  }
  const completed = !actionCompletion?.date ? false : actionCompletion.archivedAt ? false : true;
  const schedule = userAction.schedules[0]; // TODO
  const { data: session } = useSession();
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
    if (on && !actionCompletion && session?.user.id) {
      console.log("Trying to create action completion...", on, actionCompletion, session?.user.id);
      const completionDate = new Date().toISOString();
      createActionCompletion({
        variables: {
          data: {
            date: completionDate,
            action: { connect: { id: userAction.action.id } }, // hehe...
            user: { connect: { id: session.user.id } },
          },
        },
        optimisticResponse: {
          __typename: "Mutation",
          createActionCompletion: {
            __typename: "ActionCompletion",
            id: -1,
            date: completionDate,
            actionId: userAction.action.id,
            action: {
              ...userAction.action,
            },
            // actionId: userAction.action.id,
            archivedAt,
          },
        },
      });
    } else if (actionCompletion) {
      console.log(on, actionCompletion, session?.user.id);
      updateActionCompletion({
        variables: {
          where: { id: actionCompletion.id },
          data: {
            // For now, we assume that re-checking an action as complete (after it was
            // previously checked but then unchecked) means undoing the uncheck;
            // i.e., we don't need to modify the completion date.
            // date: actionCompletion.date,
            archivedAt: { set: archivedAt },
          },
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateActionCompletion: {
            ...actionCompletion,
            __typename: "ActionCompletion",
            archivedAt,
          },
        },
      });
    }
  };
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "action",
    item: {
      type: "action",
      title: userAction.action.name,
      scheduleId: schedule.id,
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
        display: "flex",
        alignItems: "center",
      }}
    >
      <CompletionCheckbox
        checked={completed}
        disabled={loading}
        onClick={() => {
          console.log("checkbox click -->", !completed);
          toggleActionCompletion(!completed);
        }}
      />
      <Typography fontSize="0.9rem">
        <Link href={`/actions/${userAction.action.slug}`} passHref>
          <StyledAnchor>{`${userAction.action.name}`}</StyledAnchor>
        </Link>
      </Typography>
      <IconButton
        title={`every ${schedule.frequency.toLowerCase()}`}
        onClick={handleScheduleIconClick}
        style={{ marginLeft: "auto" }}
      >
        <RepeatIcon sx={{ color: "gray", fontSize: "1rem" }} />
      </IconButton>
      <DragIndicatorIcon
        sx={{
          "&:hover": { cursor: "grab" },
          color: "gray",
        }}
      />
    </Box>
  );
};

export default ActionChip;

const StyledAnchor = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
  },
}));
