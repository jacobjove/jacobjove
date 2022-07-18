import CalendarEventDialog from "@/components/calendar/CalendarEventDialog";
import { UPDATE_CALENDAR_EVENT } from "@/graphql/mutations";
import { CalendarEvent } from "@/graphql/schema";
import { calendarEventDataReducer, initializeCalendarEventData } from "@/utils/calendarEvents";
import { useMutation } from "@apollo/client";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { format } from "date-fns";
import { bindPopover, bindTrigger, PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { ComponentProps, FC, useReducer, useState } from "react";
import { useDrag } from "react-dnd";

interface EventBoxProps extends ComponentProps<typeof Box> {
  event: CalendarEvent;
}

export interface DraggedCalendarEvent extends CalendarEvent {
  type: "event";
}

const EventBox: FC<EventBoxProps> = (props: EventBoxProps) => {
  const { event, ...rest } = props;
  const [hovered, setHovered] = useState(false);
  const [calendarEventData, dispatchCalendarEventData] = useReducer(
    calendarEventDataReducer,
    initializeCalendarEventData(event),
    initializeCalendarEventData
  );
  const detailDialogState = usePopupState({
    variant: "popover",
    popupId: `event-${event.id}-detail-dialog`,
  });
  const editingDialogState = usePopupState({
    variant: "popover",
    popupId: `event-${event.id}-editing-dialog`,
  });
  const [{ opacity }, dragRef] = useDrag<DraggedCalendarEvent, unknown, { opacity: number }>(
    () => ({
      type: "event",
      item: { type: "event", ...event },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    })
  );
  const startTime = event.start;
  const endTime = event.end ?? null;
  // TODO
  if (!endTime) return null;
  const detailDialogTriggerProps = bindTrigger(detailDialogState);
  return (
    <>
      <Box
        className="event"
        {...rest}
        sx={{
          opacity,
          filter: hovered ? "brightness(1.05)" : null,
          bgcolor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : theme.palette.primary.dark, // or calendar.color
          color: (theme) => `${theme.palette.primary.contrastText}`,
          border: (theme) =>
            `1px solid ${
              theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.75)"
            }`,
          borderRadius: "3px",
          position: "absolute",
          display: "flex",
          alignItems: "start",
          padding: "2px 0 1px 2px",
          overflow: "hidden",
          maxWidth: "92%",
          "& *": {
            lineHeight: "1.1",
          },
          "& svg": {
            position: "relative",
            width: "1.1rem",
          },
        }}
        onMouseOver={(e) => {
          if (e.target === e.currentTarget) {
            setHovered(true);
          }
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          detailDialogTriggerProps.onClick(e);
        }}
        ref={dragRef}
      >
        <div style={{ flexGrow: 1 }}>
          <Typography
            component="div"
            fontWeight={"600"}
            fontSize={"0.75rem"}
            marginBottom="0.15rem"
            lineHeight={"0.7rem"}
            mx="0.1rem"
          >
            {event.title}
          </Typography>
          <Typography component="div" fontSize={"0.6rem"} lineHeight={"0.6rem"} mx="0.1rem">
            {format(startTime, "h:mm aa")} &ndash; {format(endTime, "h:mm aa")}
          </Typography>
        </div>
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <DragIndicatorIcon sx={{ "&:hover": { cursor: "grab" } }} />
        </div>
      </Box>
      <EventDetailDialog
        {...bindPopover(detailDialogState)}
        event={event}
        editingDialogState={editingDialogState}
      />
      <CalendarEventDialog
        calendarEvent={event}
        dispatchCalendarEventData={dispatchCalendarEventData}
        {...bindPopover(editingDialogState)}
      />
    </>
  );
};

export default EventBox;

interface EventDetailDialogProps extends ReturnType<typeof bindPopover> {
  event: CalendarEvent;
  editingDialogState: PopupState;
}

const EventDetailDialog: FC<EventDetailDialogProps> = (props: EventDetailDialogProps) => {
  const { event, editingDialogState, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const deletionDialogState = usePopupState({
    variant: "popover",
    popupId: `event-${event.id}-deletion-dialog`,
  });

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        onBackdropClick={(event) => {
          event.stopPropagation();
        }}
        onClose={onClose}
        {...dialogProps}
      >
        <Box display="flex" justifyContent={"end"}>
          <IconButton {...bindTrigger(deletionDialogState)}>
            <DeleteIcon />
          </IconButton>
          <IconButton {...bindTrigger(editingDialogState)}>
            <EditIcon />
          </IconButton>
        </Box>
        <DialogTitle>{event.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {event.end && (
              <span>
                {format(event.start, "h:mm aa")} &ndash; {format(event.end, "h:mm aa")}
              </span>
            )}
          </DialogContentText>
          <DialogContentText>{event.notes}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <EventDeletionConfirmationDialog
        {...bindPopover(deletionDialogState)}
        event={event}
        closeDetailDialog={onClose}
      />
    </>
  );
};

interface EventDeletionConfirmationDialogProps extends ReturnType<typeof bindPopover> {
  event: CalendarEvent;
  closeDetailDialog: () => void;
}

const EventDeletionConfirmationDialog: FC<EventDeletionConfirmationDialogProps> = (
  props: EventDeletionConfirmationDialogProps
) => {
  const { event, closeDetailDialog, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const [updateCalendarEvent, { loading }] = useMutation(UPDATE_CALENDAR_EVENT);
  const handleDeletion = () => {
    const archivedAt = new Date();
    updateCalendarEvent({
      variables: {
        where: { id: event.id },
        data: { archivedAt: { set: archivedAt } },
      },
      optimisticResponse: {
        updateCalendarEvent: {
          __typename: "CalendarEvent",
          ...(event as CalendarEvent),
          archivedAt,
        },
      },
    });
    onClose();
    closeDetailDialog();
  };
  return (
    <Dialog
      {...dialogProps}
      onBackdropClick={(event) => {
        event.stopPropagation();
      }}
      onClose={onClose}
    >
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this event?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} onClick={handleDeletion} autoFocus>
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
