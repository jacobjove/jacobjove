import UserContext from "@/components/contexts/UserContext";
import Layout from "@/components/Layout";
import { userFragment } from "@/graphql/fragments";
import { addApolloState, initializeApollo } from "@/utils/apollo/client";
import { gql, useMutation } from "@apollo/client";
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
import isObject from "lodash/isObject";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useContext } from "react";

interface SettingsPageProps {
  session: Session | null;
}

const UPDATE_SETTINGS = gql`
  mutation UpdateSettings($userId: Int!, $settings: JSON!) {
    updateUser(where: { id: $userId }, data: { settings: $settings }) {
      ...UserFragment
    }
  }
  ${userFragment}
`;

const SettingsPage: NextPage<SettingsPageProps> = (_props: SettingsPageProps) => {
  const { data: session } = useSession();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const user = useContext(UserContext);
  const [updateSettings, { loading: loadingUpdateSetting }] = useMutation(UPDATE_SETTINGS);
  if (!session || !user) return null;
  const loading = loadingUpdateSetting;
  const { settings: settingsJson } = user;
  const userSettings = settingsJson
    ? isObject(settingsJson)
      ? settingsJson
      : JSON.parse(settingsJson || "{}")
    : {};
  const settings = [
    {
      fieldName: "colorMode",
      label: "Color mode",
      defaultValue: "light",
      choices: ["light", "dark"],
    },
  ];
  const handleSettingChange = (settingName: string, newValue: string) => {
    const newSettingsJson = JSON.stringify({
      ...userSettings,
      [settingName]: newValue,
    });
    updateSettings({
      variables: {
        userId: session.user.id,
        settings: newSettingsJson,
      },
      optimisticResponse: {
        updateUser: {
          ...user,
          settings: newSettingsJson,
        },
      },
    }).catch((error) => {
      console.error(error);
    });
  };
  return (
    <Layout>
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
                {settings.map(({ fieldName, label, defaultValue, choices }) => {
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
    </Layout>
  );
};
export default SettingsPage;

(SettingsPage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/app/settings",
        permanent: false,
      },
    };
  }
  const props: SettingsPageProps = {
    session,
  };
  return addApolloState(apolloClient, { props });
};
