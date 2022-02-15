import UserContext, { User } from "@/components/contexts/UserContext";
import { accountFragment, calendarFragment } from "@/graphql/fragments";
import { GET_USER } from "@/graphql/queries";
import { Account, Calendar } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import GoogleIcon from "@mui/icons-material/Google";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import axios from "axios";
import isEqual from "lodash/isEqual";
import { bindPopover } from "material-ui-popup-state/hooks";
import { signIn } from "next-auth/react";
import { FC, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useThrottledCallback } from "use-debounce";

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
  provider: CalendarProvider;
};

const CalendarSelectionCheckbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const { checked: initiallyChecked, onChange, ...rest } = props;
  const [checked, setChecked] = useState(initiallyChecked);
  return (
    <Checkbox
      checked={checked}
      onChange={(event, checked) => {
        setChecked(checked);
        onChange?.(event, checked);
      }}
      {...rest}
    />
  );
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
  const calendarListHasBeenRefreshed = useRef(false);

  const loading = loadingUpdateAccount || loadingUpdateCalendar || loadingAddCalendars;

  // TODO: should any of this be memoized or put into a useEffect?
  const { name, Icon, scope, defaultScopes, disabled } = CALENDAR_PROVIDERS[provider];
  const account = user?.accounts.find((account) => account.provider === provider) || null;
  const calendarIntegrationIsEnabled = account?.scopes.includes(scope);
  const calendars = user?.calendars.filter((calendar) => calendar.provider === provider);
  const enabledCalendars = calendars?.filter((calendar) => !!calendar.enabled);

  // TODO: Show a loading spinner and/or enable the "Apply changes" button
  const [enabledBefore, setEnabledBefore] = useState<number[]>([]);
  const [enabledAfter, setEnabledAfter] = useState<number[]>([]);

  // TODO: This seems to not work well for updating the UI while applying changes,
  // perhaps because by the time the components are ready to re-render, we're done
  // applying changes? See if there's a better way to update the UI while applying changes.
  const [applyingChanges, setApplyingChanges] = useState(false);

  useEffect(() => {
    if (enabledCalendars?.length) {
      const enabledCalendarIds = enabledCalendars.map((calendar) => calendar.id);
      if (!isEqual(enabledCalendarIds, enabledBefore)) setEnabledBefore(enabledCalendarIds);
    }
  }, [enabledCalendars, enabledBefore]);

  // TODO: is this an inappropriate use of useMemo?
  const changesHaveBeenMade = useMemo(() => {
    return !(
      enabledAfter.every((calendarId) => enabledBefore.includes(calendarId)) &&
      enabledBefore.every((calendarId) => enabledAfter.includes(calendarId))
    );
  }, [enabledAfter, enabledBefore]);

  const applyChanges = useThrottledCallback(() => {
    setApplyingChanges(true);
    const calendarIdsToEnable = enabledAfter.filter(
      (calendarId) => !enabledBefore.includes(calendarId)
    );
    const calendarIdsToDisable = enabledBefore.filter(
      (calendarId) => !enabledAfter.includes(calendarId)
    );
    // Enable calendars.
    const enablementPromises = calendarIdsToEnable.map((calendarId) => {
      updateCalendar({
        variables: {
          calendarId,
          data: { enabled: { set: true } },
        },
      })
        .then(() => axios.get(`/api/calendars/${calendarId}/sync`))
        .catch(alert);
    });
    // Disable calendars.
    const disablementPromises = calendarIdsToDisable.map((calendarId) => {
      // TODO: confirm this results in the calendar events being removed
      updateCalendar({
        variables: {
          calendarId,
          data: { enabled: { set: false } },
        },
      });
    });
    // Wait for changes to be applied, then update state.
    Promise.all([...enablementPromises, ...disablementPromises])
      .then(() => {
        setEnabledBefore(enabledAfter);
      })
      .catch(alert)
      .finally(() => {
        setApplyingChanges(false);
      });
  }, 2000);

  const refreshCalendarList = useThrottledCallback(
    async (user: User, provider: CalendarProvider, calendars: Calendar[] | undefined) => {
      setRefreshing(true);
      return await axios
        .get(`/api/calendars?provider=${provider}`)
        .then(async (response) => {
          if (response.data?.calendars.length) {
            // Create calendars that don't already exist.
            const calendarsToAdd: Calendar[] = response.data.calendars
              .filter(
                (calendar: Calendar) => !calendars?.find((_) => _.remoteId == calendar.remoteId)
              )
              .map((calendar: Calendar) => ({
                ...calendar,
                enabled: false,
                userId: user.id,
              }));
            // TODO: Delete or disassociate calendars that have been removed from their source.
            await addCalendars({ variables: { data: calendarsToAdd } });
          }
          calendarListHasBeenRefreshed.current = true;
        })
        .catch(alert) // TODO: fix before publishing;
        .finally(() => setRefreshing(false));
    },
    3000
  );

  useEffect(() => {
    const refresh =
      dialogProps.open &&
      !calendarListHasBeenRefreshed.current &&
      !!user &&
      !loading &&
      !refreshing &&
      provider &&
      calendarIntegrationIsEnabled &&
      !calendars?.length;
    if (refresh) refreshCalendarList(user, provider, calendars);
  }, [
    dialogProps.open,
    loading,
    refreshing,
    calendarIntegrationIsEnabled,
    calendars,
    user,
    provider,
    refreshCalendarList,
  ]);

  // TODO: this also needs to remove associated calendars and events.
  // We should show a confirmation dialog first.
  const removeCalendarScope = useCallback(() => {
    if (!account || loading) return;
    const newScopes = account.scopes.filter((_scope) => _scope !== scope);
    updateAccount({
      variables: {
        accountId: account.id,
        data: { scopes: { set: newScopes } },
      },
    }).catch(alert);
  }, [loading, account, scope, updateAccount]);

  const steps = [
    [
      `Connect ${name} account`,
      `Sign in with your ${name} account, and permit the calendar integration.`,
    ],
    [
      "Select calendars to sync",
      `Select one or more calendars to connect from your ${name} account to your SelfBuilder account.`,
    ],
  ];
  const nextStep = enabledCalendars?.length ? null : calendarIntegrationIsEnabled ? 1 : 0;
  console.log("nextStep:", nextStep);
  if (!user) return null;
  // TODO: reduce unnecessary re-renders
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
      <DialogContent sx={{ minHeight: "33vh", display: "flex", flexDirection: "column" }}>
        {nextStep === null ? (
          <Box display="flex" alignItems="center">
            <DoneIcon />
            <Typography sx={{ mx: 1 }}>{`${name} Calendar integration is enabled.`}</Typography>
          </Box>
        ) : (
          <Stepper activeStep={nextStep}>
            {steps.map(([label, caption], index) => {
              return (
                <Step key={label}>
                  <StepLabel
                    sx={{ mx: 1, "& .MuiStepLabel-labelContainer": { mx: 1 } }}
                    {...(nextStep === index && {
                      optional: (
                        <Typography variant="caption" minHeight={0}>
                          {caption}
                        </Typography>
                      ),
                    })}
                  >
                    <Typography>{label}</Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        )}
        {calendarIntegrationIsEnabled ? (
          <TableContainer sx={{ mt: "3rem" }}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h3">{"Available calendars"}</Typography>
              <IconButton
                title={`Refresh data from ${name} Calendar`}
                sx={{ ml: "auto" }}
                onClick={() => {
                  setRefreshing(true);
                  refreshCalendarList(user, provider, calendars);
                }}
              >
                {refreshing ? <CircularProgress size={18} /> : <RefreshIcon />}
              </IconButton>
            </Box>
            {calendars?.length ? (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{"Connect"}</TableCell>
                    <TableCell>{"Name"}</TableCell>
                    <TableCell>{"Color"}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {calendars?.map((calendar) => (
                    <TableRow key={calendar.id}>
                      <TableCell>
                        <CalendarSelectionCheckbox
                          color="primary"
                          checked={!!calendar.enabled}
                          title={`${calendar.enabled ? "Disconnect" : "Connect"} ${calendar.name}`}
                          onChange={(_event, checked) => {
                            // TODO: debounce?
                            setEnabledAfter(
                              checked
                                ? [...new Set([...enabledAfter, calendar.id])]
                                : enabledAfter.filter((_) => _ !== calendar.id)
                            );
                          }}
                        />
                      </TableCell>
                      <TableCell>{calendar.name}</TableCell>
                      <TableCell>{calendar.color}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : refreshing ? null : (
              <Box sx={{ textAlign: "center", my: 2 }}>
                <Typography>{`No calendars are available from ${name}.`}</Typography>
              </Box>
            )}
          </TableContainer>
        ) : (
          <Box flexGrow={1} display="flex" alignItems={"center"} justifyContent={"center"}>
            <Button
              variant="contained"
              title={`Connect ${name} Calendar`}
              onClick={() => {
                signIn(
                  provider,
                  { callbackUrl: window.location.href },
                  { scope: [...(account?.scopes ?? defaultScopes), scope].join(" ") }
                )
                  .then(async () => await refreshCalendarList(user, provider, calendars))
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
        <Button disabled={applyingChanges || !changesHaveBeenMade} onClick={applyChanges}>
          {applyingChanges ? "Applying changes..." : "Apply changes"}
        </Button>
        <Button
          onClick={() => {
            applyChanges();
            onClose();
          }}
        >
          {"Done"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
