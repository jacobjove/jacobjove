import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import { Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CalendarEventDialog from "@web/components/calendar/CalendarEventDialog";
import { CalendarEventFragment } from "@web/generated/graphql/fragments/calendarEvent.fragment";
import { useUpdateCalendarEvent } from "@web/generated/hooks/calendarEvent.hooks";
import { format } from "date-fns";
import { bindDialog, bindTrigger, PopupState, usePopupState } from "material-ui-popup-state/hooks";
import { ComponentProps, FC, useState } from "react";
import { useDrag } from "react-dnd";

interface CalendarEventBoxProps extends ComponentProps<typeof Box> {
  event: CalendarEventFragment;
}

export interface DraggedCalendarEvent extends CalendarEventFragment {
  type: "event";
}

const CalendarEventBox: FC<CalendarEventBoxProps> = (props: CalendarEventBoxProps) => {
  const { event: calendarEvent, ...rest } = props;
  const [hovered, setHovered] = useState(false);
  const detailDialogState = usePopupState({
    variant: "dialog",
    popupId: `event-${calendarEvent.id}-detail-dialog`,
  });
  const editingDialogState = usePopupState({
    variant: "dialog",
    popupId: `event-${calendarEvent.id}-editing-dialog`,
  });
  const [{ opacity }, dragRef] = useDrag<DraggedCalendarEvent, unknown, { opacity: number }>(
    () => ({
      type: "event",
      item: { type: "event", ...calendarEvent },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    })
  );
  const startTime = calendarEvent.start;
  const endTime = calendarEvent.end ?? null;
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
          filter: hovered ? "brightness(1.05)" : null, // TODO: not working
          bgcolor: (theme) =>
            calendarEvent.canceled
              ? theme.palette.mode === "light"
                ? theme.palette.secondary.light
                : theme.palette.secondary.dark
              : theme.palette.mode === "light"
              ? theme.palette.primary.main
              : theme.palette.primary.dark,
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
            {calendarEvent.title}
          </Typography>
          <Typography component="div" fontSize={"0.6rem"} lineHeight={"0.6rem"} mx="0.1rem">
            {format(startTime, "h:mm aa")} &ndash; {format(endTime, "h:mm aa")}
          </Typography>
        </div>
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <DragIndicatorIcon sx={{ "&:hover": { cursor: "grab" } }} />
        </div>
      </Box>
      <CalendarEventDetailDialog
        {...bindDialog(detailDialogState)}
        event={calendarEvent}
        editingDialogState={editingDialogState}
        close={detailDialogState.close}
      />
      <CalendarEventDialog
        mutation={"update"}
        data={calendarEvent}
        {...bindDialog(editingDialogState)}
        close={editingDialogState.close}
      />
    </>
  );
};

export default CalendarEventBox;

interface CalendarEventDetailDialogProps extends ReturnType<typeof bindDialog> {
  event: CalendarEventFragment;
  editingDialogState: PopupState;
  close: () => void;
}

const CalendarEventDetailDialog: FC<CalendarEventDetailDialogProps> = (
  props: CalendarEventDetailDialogProps
) => {
  const { event: calendarEvent, editingDialogState, close, onClose, ...dialogProps } = props;
  const deletionDialogState = usePopupState({
    variant: "dialog",
    popupId: `event-${calendarEvent.id}-deletion-dialog`,
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
        <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton {...bindTrigger(deletionDialogState)}>
            <DeleteIcon />
          </IconButton>
          <IconButton {...bindTrigger(editingDialogState)}>
            <EditIcon />
          </IconButton>
        </Toolbar>
        <DialogTitle>{calendarEvent.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {calendarEvent.end && (
              <span>
                {format(calendarEvent.start, "h:mm aa")} &ndash;{" "}
                {format(calendarEvent.end, "h:mm aa")}
              </span>
            )}
          </DialogContentText>
          <DialogContentText>{calendarEvent.notes}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <EventDeletionConfirmationDialog
        {...bindDialog(deletionDialogState)}
        event={calendarEvent}
        closeDetailDialog={close}
        close={deletionDialogState.close}
      />
    </>
  );
};

interface EventDeletionConfirmationDialogProps extends ReturnType<typeof bindDialog> {
  event: CalendarEventFragment;
  closeDetailDialog: () => void;
  close: () => void;
}

const EventDeletionConfirmationDialog: FC<EventDeletionConfirmationDialogProps> = (
  props: EventDeletionConfirmationDialogProps
) => {
  const { event: calendarEvent, closeDetailDialog, close, onClose, ...dialogProps } = props;

  const [updateCalendarEvent, { loading }] = useUpdateCalendarEvent();
  const handleDeletion = () => {
    const archivedAt = new Date();
    updateCalendarEvent.current?.({
      variables: {
        where: { id: calendarEvent.id },
        data: { archivedAt: archivedAt },
      },
      optimisticResponse: {
        updateCalendarEvent: {
          ...calendarEvent,
          archivedAt,
        },
      },
    });
    close();
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
