import UserContext from "@/components/contexts/UserContext";
import { accountFragment } from "@/graphql/fragments";
import { GET_USER } from "@/graphql/queries";
import { Account, Calendar } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
import { useCallback, useContext, useMemo } from "react";

const CREATE_CALENDARS = gql`
  mutation createCalendars($data: [CalendarCreateManyInput!]!) {
    createManyCalendar(data: $data, skipDuplicates: true) {
      count
    }
  }
`;

const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($accountId: Int!, $data: NoteUpdateInput!) {
    updateAccount(where: { id: $accountId }, data: $data) {
      ...AccountFragment
    }
  }
  ${accountFragment}
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
  const [addCalendars, { loading: loadingAddCalendars }] = useMutation<{
    addCalendars: Calendar[];
  }>(CREATE_CALENDARS, {
    // TODO
    refetchQueries: [GET_USER, "GetUser"],
  });
  const { name, Icon, scope, defaultScopes, disabled } = useMemo(() => {
    return CALENDAR_PROVIDERS[provider];
  }, [provider]);
  const account = useMemo(() => {
    if (!user) return null;
    return user.accounts.find((account) => account.provider === provider) || null;
  }, [user, provider]);
  const calendars = useMemo(() => {
    if (!user || !account) return [];
    console.log("calculated calendars", calendars);
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
  return (
    <Dialog fullWidth {...dialogProps} onClose={onClose}>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Icon />{" "}
        <Typography mx={1}>
          {name} {"Calendar integration"}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ minHeight: "33vh" }}>
        {account?.scopes.includes(scope) ? (
          <>
            <DialogContentText sx={{ textAlign: "center" }}>
              {account.providerAccountId}
            </DialogContentText>
            <Box sx={{ textAlign: "center" }}>
              <Button onClick={removeCalendarScope} color="warning">
                {`Disconnect ${name} calendar`}
              </Button>
            </Box>
            <TableContainer sx={{ mt: 2 }}>
              <Box display="flex" justifyContent="right">
                <Button
                  title={`Refresh data from ${name} Calendar`}
                  sx={{ ml: "auto" }}
                  onClick={() => {
                    user &&
                      retrieveCalendars()
                        .then((response) => {
                          if (response.data?.calendars?.length) {
                            // Create calendars that don't already exist.
                            const calendarsToAdd = response.data.calendars
                              .filter(
                                (calendar: Calendar) =>
                                  !calendars.find((_) => _.sourceId == calendar.sourceId)
                              )
                              .map((calendar: Calendar) => ({
                                ...calendar,
                                disabled: true,
                                userId: user.id,
                              }));
                            addCalendars({ variables: { data: calendarsToAdd } }).catch(alert);
                          }
                        })
                        .catch(alert); // TODO: fix before publishing
                  }}
                >
                  {"Refresh data"}
                </Button>
              </Box>
              {calendars.length > 0 ? (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
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
                            checked={!calendar.disabled}
                            onChange={() => alert("TODO")}
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
          <Box textAlign="center">
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
        <Button onClick={onClose}>Cancel</Button>
        {/* <Button
          onClick={() => {
            console.log("do something");
          }}
        >
          Subscribe
        </Button> */}
      </DialogActions>
    </Dialog>
  );
}
