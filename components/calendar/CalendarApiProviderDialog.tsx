import UserContext from "@/components/contexts/UserContext";
import { accountFragment, calendarFragment } from "@/graphql/fragments";
import { GET_USER } from "@/graphql/queries";
import { Account, Calendar } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import AppleIcon from "@mui/icons-material/Apple";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import GoogleIcon from "@mui/icons-material/Google";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { bindPopover } from "material-ui-popup-state/hooks";
import { signIn } from "next-auth/react";
import { useCallback, useContext, useMemo, useState } from "react";

const CREATE_CALENDARS = gql`
  mutation createCalendars($data: [CalendarCreateManyInput!]!) {
    createManyCalendar(data: $data, skipDuplicates: true) {
      count
    }
  }
`;

const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($accountId: Int!, $data: AccountUpdateInput!) {
    updateAccount(where: { id: $accountId }, data: $data) {
      ...AccountFragment
    }
  }
  ${accountFragment}
`;

const UPDATE_CALENDAR = gql`
  mutation UpdateCalendar($calendarId: Int!, $data: CalendarUpdateInput!) {
    updateCalendar(where: { id: $calendarId }, data: $data) {
      ...CalendarFragment
    }
  }
  ${calendarFragment}
`;

type CalendarProvider = "google" | "apple";

interface CalendarProviderProps {
  name: string;
  Icon: typeof GoogleIcon | typeof AppleIcon;
  scope: string;
  defaultScopes: string[];
  disabled?: boolean;
}

const CALENDAR_PROVIDERS: Record<CalendarProvider, CalendarProviderProps> = {
  google: {
    name: "Google",
    Icon: GoogleIcon,
    // https://developers.google.com/identity/protocols/oauth2/scopes
    scope: "https://www.googleapis.com/auth/calendar",
    defaultScopes: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "openid",
    ],
  },
  apple: {
    name: "Apple",
    Icon: AppleIcon,
    scope: "", // TODO
    defaultScopes: [],
    disabled: true,
  },
};

type CalendarApiProviderDialogProps = ReturnType<typeof bindPopover> & {
  provider: "google" | "apple";
};

export default function CalendarApiProviderDialog(props: CalendarApiProviderDialogProps) {
  const { provider, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const user = useContext(UserContext);
  const [updateAccount, { loading: loadingUpdateAccount }] = useMutation<{
    updateAccount: Account;
  }>(UPDATE_ACCOUNT);
  const [updateCalendar, { loading: loadingUpdateCalendar }] = useMutation<{
    updateCalendar: Calendar;
  }>(UPDATE_CALENDAR);
  const [addCalendars, { loading: loadingAddCalendars }] = useMutation<{
    addCalendars: Calendar[];
  }>(CREATE_CALENDARS, {
    // TODO
    refetchQueries: [GET_USER, "GetUser"],
  });
  const [refreshing, setRefreshing] = useState(false);
  const { name, Icon, scope, defaultScopes, disabled } = useMemo(() => {
    return CALENDAR_PROVIDERS[provider];
  }, [provider]);
  const account = useMemo(() => {
    if (!user) return null;
    return user.accounts.find((account) => account.provider === provider) || null;
  }, [user, provider]);
  const calendars = useMemo(() => {
    if (!user || !account) return [];
    return user.calendars.filter((calendar) => calendar.provider === provider);
  }, [user, account, provider]);
  // TODO: this also needs to remove associated calendars and events.
  // We should show a confirmation dialog first.
  const removeCalendarScope = useCallback(() => {
    if (!account) return;
    updateAccount({
      variables: {
        accountId: account.id,
        data: {
          scopes: account.scopes.filter((_scope) => _scope !== scope),
        },
      },
    }).catch(alert);
  }, [updateAccount, account, scope]);
  const retrieveCalendars = async () => {
    return await axios.get(`/api/calendars/${provider}/calendars`);
  };
  const refreshCalendarEvents = async (calendarId: string) => {
    await axios.get(`/api/calendars/${provider}/calendars/${calendarId}/events/refresh`);
  };
  return (
    <Dialog fullWidth {...dialogProps} onClose={onClose}>
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          ml: "auto",
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Icon />{" "}
        <Typography variant="h2" component="span" mx={1}>
          {name} {"Calendar integration"}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ minHeight: "33vh" }}>
        {account?.scopes.includes(scope) ? (
          <>
            <DialogContentText sx={{ display: "flex", alignItems: "center" }}>
              <DoneIcon />{" "}
              <Typography
                mx={1}
                component="span"
              >{`Your ${name} Calendar account is connected.`}</Typography>
            </DialogContentText>
            {!calendars.filter((calendar) => calendar.enabled).length ? (
              <DialogContentText sx={{ display: "flex", alignItems: "center" }}>
                <ClearIcon />{" "}
                <Typography mx={1} component="span">{`No calendars are selected.`}</Typography>
              </DialogContentText>
            ) : null}
            <TableContainer sx={{ mt: "4rem" }}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">{"Available calendars"}</Typography>
                <IconButton
                  title={`Refresh data from ${name} Calendar`}
                  sx={{ ml: "auto" }}
                  onClick={() => {
                    if (user) {
                      setRefreshing(true);
                      retrieveCalendars()
                        .then((response) => {
                          if (response.data?.calendars?.length) {
                            // Create calendars that don't already exist.
                            const calendarsToAdd: Calendar[] = response.data.calendars
                              .filter(
                                (calendar: Calendar) =>
                                  !calendars.find((_) => _.sourceId == calendar.sourceId)
                              )
                              .map((calendar: Calendar) => ({
                                ...calendar,
                                enabled: false,
                                userId: user.id,
                              }));
                            addCalendars({ variables: { data: calendarsToAdd } })
                              .then(() => {
                                response.data.calendars.forEach((calendar: Calendar) => {
                                  calendar.sourceId &&
                                    refreshCalendarEvents(calendar.sourceId).catch(alert);
                                });
                              })
                              .catch(alert)
                              .finally(() => setRefreshing(false));
                            // TODO: Delete or disassociate calendars that have been removed from their source.
                          }
                        })
                        .catch(alert); // TODO: fix before publishing
                    }
                  }}
                >
                  {refreshing ? <CircularProgress size={18} /> : <RefreshIcon />}
                </IconButton>
              </Box>
              {calendars.length > 0 ? (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Connected</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Color</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {calendars?.map((calendar) => (
                      <TableRow key={calendar.id}>
                        <TableCell>
                          <Checkbox
                            color="primary"
                            checked={!!calendar.enabled}
                            title={`${calendar.enabled ? "Disconnect" : "Connect"} ${
                              calendar.name
                            }`}
                            onChange={(event) => {
                              console.log(event);
                              // TODO: debounce
                              updateCalendar({
                                variables: {
                                  calendarId: calendar.id,
                                  data: { enabled: { set: event.target.checked } },
                                },
                                optimisticResponse: {
                                  updateCalendar: {
                                    __typename: "Calendar",
                                    ...calendar,
                                    enabled: event.target.checked,
                                  },
                                },
                              }).catch(alert);
                            }}
                          />
                        </TableCell>
                        <TableCell>{calendar.name}</TableCell>
                        <TableCell>{calendar.color}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Box sx={{ textAlign: "center" }}>
                  <Typography>{`You don't have any calendars from ${name} yet.`}</Typography>
                </Box>
              )}
            </TableContainer>
          </>
        ) : (
          <Box height="100%" display="flex" alignItems={"center"} justifyContent={"center"}>
            <Button
              title={`Connect ${name} Calendar`}
              onClick={() => {
                signIn(
                  provider,
                  { callbackUrl: window.location.href },
                  { scope: [...(account?.scopes ?? defaultScopes), scope].join(" ") }
                )
                  .then(() => retrieveCalendars())
                  .catch(alert);
              }}
              disabled={disabled}
            >
              {`Connect ${name} calendar`}
            </Button>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        {account?.scopes.includes(scope) && (
          <Button onClick={removeCalendarScope} color="warning" sx={{ mr: "auto" }}>
            {`Disconnect ${name} calendar`}
          </Button>
        )}
        <Button onClick={onClose}>Done</Button>
      </DialogActions>
    </Dialog>
  );
}
