import Layout from "@/components/Layout";
import UserContext from "@/components/UserContext";
import { notebookFragment, noteFragment } from "@/graphql/fragments";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
// import TextField from "@mui/material/TextField";
import NativeSelect from "@mui/material/NativeSelect";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useContext } from "react";

interface NotesPageProps {
  session: Session | null;
}

const UPDATE_NOTEBOOK = gql`
  mutation UpdateNotebook($notebookId: Int!, $data: NotebookUpdateInput!) {
    updateNotebook(where: { id: $notebookId }, data: $data) {
      ...NotebookFragment
    }
  }
  ${notebookFragment}
`;

const UPDATE_NOTE = gql`
  mutation UpdateNote($noteId: Int!, $data: NoteUpdateInput!) {
    updateNote(where: { id: $noteId }, data: $data) {
      ...UserFragment
    }
  }
  ${noteFragment}
`;

const drawerWidth = 240;

const NotesPage: NextPage<NotesPageProps> = (_props: NotesPageProps) => {
  const { data: session } = useSession();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const user = useContext(UserContext);
  const [updateNotes, { loading: loadingUpdateSetting }] = useMutation(UPDATE_NOTEBOOK);
  if (!session || !user) return null;
  const loading = loadingUpdateSetting;
  const { settings: settingsJson } = user;
  const userNotes = settingsJson
    ? typeof settingsJson === "object"
      ? settingsJson
      : JSON.parse(settingsJson)
    : {};
  const handleSettingChange = (settingName: string, newValue: string) => {
    updateNotes({
      variables: {
        userId: user.id,
        settings: JSON.stringify({
          ...userNotes,
          [settingName]: newValue,
        }),
      },
    }).then(() => {
      console.log("Notes updated");
      getSession();
    });
  };
  return (
    <Layout>
      <NextSeo
        title={"Notes"}
        canonical={"/app/notes"}
        description={"Write some notes."}
        noindex
        nofollow
      />
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          height: "100%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Paper>
          <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
            <Toolbar />
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
              hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
              velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
              Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
              viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
              Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
              at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
              ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at
              quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
              accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec
              nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.
              Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
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
                        Setting
                      </TableCell>
                      <TableCell component="th" scope="column">
                        Value
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[].map(({ fieldName, label, defaultValue, choices }) => {
                      const currentValue = userNotes[fieldName] ?? defaultValue;
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
                                  {[].map((choice) => (
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
                                  {[].map((choice) => (
                                    <MenuItem key={choice} value={choice}>
                                      {choice}
                                    </MenuItem>
                                  ))}
                                </Select>
                              )
                            ) : (
                              userNotes[fieldName] ?? defaultValue
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </form>
            </TableContainer>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};
export default NotesPage;

(NotesPage as PageWithAuth).auth = true;

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
  const props: NotesPageProps = {
    session,
  };
  return addApolloState(apolloClient, { props });
};
