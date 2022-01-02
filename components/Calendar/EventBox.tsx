import EventEditingDialog from "@/components/calendar/EventEditingDialog";
import { DELETE_CALENDAR_EVENT, GET_CALENDAR_EVENTS } from "@/graphql/queries";
import { CalendarEvent } from "@/graphql/schema";
import { useMutation } from "@apollo/client";
import DeleteIcon from "@mui/icons-material/Delete";
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
import { format, parseISO } from "date-fns";
import { ComponentProps, FC, useState } from "react";

interface EventBoxProps extends ComponentProps<typeof Box> {
  event: CalendarEvent;
}

const EventBox: FC<EventBoxProps> = (props: EventBoxProps) => {
  const { event, ...rest } = props;
  const [hovered, setHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [eventEditingDialogOpen, setEventEditingDialogOpen] = useState(false);

  const startTime = parseISO(event.start);
  const endTime = event.end ? parseISO(event.end) : null;
  if (!endTime) {
    console.error("EventBox: endTime is null");
    return null;
  }
  return (
    <>
      <Box
        className="event"
        {...rest}
        sx={{
          bgcolor: "rgb(100, 181, 246)", // or calendar.color
          filter: hovered ? "brightness(1.05)" : null,
          color: "white",
          fontSize: "0.8rem",
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
          setDialogOpen(true);
        }}
      >
        <Typography component="div" fontWeight={"bold"} fontSize={"0.75rem"}>
          {event.title}
        </Typography>
        <Typography component="div" fontSize={"0.6rem"}>
          {format(startTime, "h:mm aa")} &ndash; {format(endTime, "h:mm aa")}
        </Typography>
      </Box>
      <EventDetailDialog
        event={event}
        open={dialogOpen}
        setOpen={setDialogOpen}
        setEditingDialogOpen={setEventEditingDialogOpen}
      />
      <EventEditingDialog
        event={event}
        open={eventEditingDialogOpen}
        setOpen={setEventEditingDialogOpen}
      />
    </>
  );
};

export default EventBox;

interface EventDetailDialogProps {
  event: CalendarEvent;
  open: boolean;
  setOpen: (open: boolean) => void;
  setEditingDialogOpen: (open: boolean) => void;
}

const EventDetailDialog: FC<EventDetailDialogProps> = (props: EventDetailDialogProps) => {
  const { event, open, setOpen, setEditingDialogOpen } = props;
  const [deletionDialogOpen, setDeletionDialogOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onBackdropClick={(event) => {
          event.stopPropagation();
        }}
        onClose={() => {
          handleClose();
        }}
        // maxWidth="sm"
        // fullWidth
      >
        <Box display="flex" justifyContent={"end"}>
          <IconButton
            onClick={() => {
              setDeletionDialogOpen(true);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditingDialogOpen(true);
              setOpen(false);
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
        <DialogTitle>{event.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {event.end && (
              <span>
                {format(parseISO(event.start), "h:mm aa")} &ndash;{" "}
                {format(parseISO(event.end), "h:mm aa")}
              </span>
            )}
          </DialogContentText>
          <DialogContentText>{event.notes}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <EventDeletionConfirmationDialog
        event={event}
        open={deletionDialogOpen}
        setOpen={setDeletionDialogOpen}
        setDetailDialogOpen={setOpen}
      />
    </>
  );
};

interface EventDeletionConfirmationDialogProps {
  event: CalendarEvent;
  open: boolean;
  setOpen: (open: boolean) => void;
  setDetailDialogOpen: (open: boolean) => void;
}

const EventDeletionConfirmationDialog: FC<EventDeletionConfirmationDialogProps> = (
  props: EventDeletionConfirmationDialogProps
) => {
  const { event, open, setOpen, setDetailDialogOpen } = props;
  const [deleteEvent, { loading }] = useMutation(DELETE_CALENDAR_EVENT, {
    refetchQueries: [
      GET_CALENDAR_EVENTS, // DocumentNode object parsed with gql
      "GetCalendarEvents", // Query name
    ],
  });
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeletion = () => {
    deleteEvent({
      variables: {
        id: event.id,
      },
    });
    setOpen(false);
    setDetailDialogOpen(false);
  };
  return (
    <Dialog
      open={open}
      onBackdropClick={(event) => {
        event.stopPropagation();
      }}
      onClose={handleClose}
    >
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this event?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={handleClose}>
          Cancel
        </Button>
        <Button disabled={loading} onClick={handleDeletion} autoFocus>
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
