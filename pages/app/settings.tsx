import AppLayout from "@/components/AppLayout";
import { useUser } from "@/components/contexts/UserContext";
import { useUpdateUser } from "@/graphql/generated/hooks/user.hooks";
import { getOptimisticResponseForUserUpdate } from "@/graphql/generated/mutations/user.mutations";
import { Settings } from "@/graphql/generated/types/User";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { NextSeo } from "next-seo";

interface SettingsPageProps {
  session: Session | null;
}

interface SettingOptions {
  label: string;
  defaultValue: string;
  choices?: string[];
}

const SettingsPage: NextPage<SettingsPageProps> = (_props: SettingsPageProps) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { user } = useUser();
  const [updateUser, { loading: loadingUpdateSetting }] = useUpdateUser();
  const loading = loadingUpdateSetting;
  const userSettings: Settings = user?.settings ?? {};
  const settings: Record<keyof Settings, SettingOptions> = {
    colorMode: {
      label: "Color mode",
      defaultValue: "light",
      choices: ["light", "dark"],
    },
    defaultCalendarId: {
      label: "Default calendar",
      defaultValue: "",
      choices: user?.calendars?.map((calendar) => calendar.id) ?? [],
    },
  };
  const handleSettingChange = (settingName: string, newValue: string) => {
    if (!user) return;
    const newSettings = {
      ...userSettings,
      [settingName]: newValue,
    };
    const data = { settings: newSettings };
    const optimisticResponse = getOptimisticResponseForUserUpdate(user, data);
    updateUser.current?.({
      variables: {
        where: { id: user.id },
        data,
      },
      optimisticResponse,
    });
  };
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
                  const { label, defaultValue, choices } = settings[fieldName];
                  const currentValue = userSettings[fieldName] ?? defaultValue;
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
                              onChange={(e) => handleSettingChange(fieldName, e.target.value)}
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
                              onChange={(e) => handleSettingChange(fieldName, e.target.value)}
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
