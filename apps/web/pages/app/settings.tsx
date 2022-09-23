import { PaletteMode } from "@mui/material";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppLayout from "@web/components/AppLayout";
import ColorModeContext from "@web/components/contexts/ColorModeContext";
import { useUser } from "@web/components/contexts/UserContext";
import { getOptimisticResponseForUserUpdate } from "@web/generated/graphql/mutations/user.mutations";
import { useUpdateUser } from "@web/generated/hooks/user.hooks";
import { Settings } from "@web/generated/models/User/types";
import { buildGetServerSidePropsFunc } from "@web/utils/ssr";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { NextSeo } from "next-seo";
import { ChangeEvent, useContext, useEffect, useReducer } from "react";

interface SettingsPageProps {
  session: Session | null;
}

interface SettingOptions {
  label: string;
  defaultValue: string;
  choices?: string[];
  onChange?: (value: string) => void;
}

export function settingsReducer(state: Settings, payload: Partial<Settings>) {
  // Return a new object with the updated values.
  return { ...state, ...payload };
}

const SettingsPage: NextPage<SettingsPageProps> = (_props: SettingsPageProps) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { user } = useUser();
  const [, setColorMode] = useContext(ColorModeContext);
  const [updateUser, { loading: loadingUpdateSetting }] = useUpdateUser();
  const loading = loadingUpdateSetting;
  const [userSettings, dispatchUserSettings] = useReducer(
    settingsReducer,
    user?.settings ?? ({} as Settings)
  );
  const settings: Record<keyof Settings, SettingOptions> = {
    colorMode: {
      label: "Color mode",
      defaultValue: "light",
      choices: ["light", "dark"],
      onChange: (value) => setColorMode(value as PaletteMode), // TODO
    },
    defaultCalendarId: {
      label: "Default calendar",
      defaultValue: "",
      choices: user?.calendars?.map((calendar) => calendar.id) ?? [],
    },
  };
  const handleSettingChange = (settingName: string, newValue: string) => {
    if (!user || !userSettings) return;
    const newSettings = { ...userSettings, [settingName]: newValue };
    const data = { settings: newSettings };
    const optimisticResponse = getOptimisticResponseForUserUpdate(user, data);
    dispatchUserSettings({ [settingName]: newValue });
    updateUser.current?.({
      variables: {
        where: { id: user.id },
        data,
      },
      optimisticResponse,
    });
  };
  useEffect(() => {
    if (!user) return;
    dispatchUserSettings(user.settings);
  }, [user]);
  return (
    <AppLayout>
      <NextSeo
        title={"Settings"}
        canonical={"/app/settings"}
        description={"Adjust your settings."}
        noindex
        nofollow
      />
      <Container
        maxWidth="md"
        sx={{
          height: "100%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            padding: "1rem",
            height: "100%",
            maxHeight: "100%",
          }}
        >
          <form>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="column" sx={{ width: "10rem" }}>
                    <Typography variant="h4">{"Setting"}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="column">
                    <Typography variant="h4">{"Value"}</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(settings).map((key) => {
                  const fieldName = key as keyof Settings;
                  const { label, defaultValue, choices, onChange: _onChange } = settings[fieldName];
                  const currentValue = userSettings[fieldName] ?? defaultValue;
                  const onChange = (
                    e: ChangeEvent<HTMLSelectElement> | SelectChangeEvent<string>
                  ) => {
                    _onChange?.(e.target.value);
                    handleSettingChange(fieldName, e.target.value);
                  };
                  return (
                    <TableRow key={fieldName}>
                      <TableCell component="th" scope="row">
                        {label}
                      </TableCell>
                      <TableCell>
                        {choices ? (
                          isMobile ? (
                            <NativeSelect
                              defaultValue={currentValue}
                              disabled={loading}
                              inputProps={{
                                name: "dashboard",
                                id: "uncontrolled-dashboard",
                              }}
                              onChange={onChange}
                            >
                              {choices.map((choice) => (
                                <option key={choice} value={choice}>
                                  {choice}
                                </option>
                              ))}
                            </NativeSelect>
                          ) : (
                            <Select
                              value={currentValue}
                              disabled={loading}
                              SelectDisplayProps={{
                                style: { paddingTop: "0.4rem", paddingBottom: "0.4rem" },
                              }}
                              onChange={onChange}
                            >
                              {choices.map((choice) => (
                                <MenuItem key={choice} value={choice}>
                                  {choice}
                                </MenuItem>
                              ))}
                            </Select>
                          )
                        ) : (
                          userSettings[fieldName] ?? defaultValue
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </form>
        </TableContainer>
      </Container>
    </AppLayout>
  );
};
export default SettingsPage;

(SettingsPage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/app/settings",
});
