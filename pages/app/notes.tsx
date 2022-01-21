import Layout from "@/components/Layout";
import { notebookFragment, noteFragment } from "@/graphql/fragments";
// import ListSubheader from "@mui/material/ListSubheader";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
import { Notebook } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useMutation, useQuery } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import ClassIcon from "@mui/icons-material/Class";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MenuItem from "@mui/material/MenuItem";
// import NativeSelect from "@mui/material/NativeSelect";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/system";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

interface NotesPageProps {
  session: Session | null;
}

const CREATE_NOTEBOOK = gql`
  mutation CreateNotebook($data: NotebookCreateInput!) {
    createNotebook(data: $data) {
      ...NotebookFragment
    }
  }
  ${notebookFragment}
`;

const UPDATE_NOTEBOOK = gql`
  mutation UpdateNotebook($notebookId: Int!, $data: NotebookUpdateInput!) {
    updateNotebook(where: { id: $notebookId }, data: $data) {
      ...NotebookFragment
    }
  }
  ${notebookFragment}
`;

const CREATE_NOTE = gql`
  mutation CreateNote($data: NoteCreateInput!) {
    createNote(data: $data) {
      ...NoteFragment
    }
  }
  ${noteFragment}
`;

const UPDATE_NOTE = gql`
  mutation UpdateNote($noteId: Int!, $data: NoteUpdateInput!) {
    updateNote(where: { id: $noteId }, data: $data) {
      ...NoteFragment
    }
  }
  ${noteFragment}
`;

const QUERY = gql`
  query GetNotebooks($userId: Int!) {
    notebooks(where: { ownerId: { equals: $userId } }) {
      ...NotebookFragment
    }
  }
  ${notebookFragment}
`;

const drawerWidth = 240;

interface NotesPageData {
  notebooks: Notebook[];
}

const NotesPage: NextPage<NotesPageProps> = (_props: NotesPageProps) => {
  const { data: session } = useSession();
  const {
    data,
    loading: loadingNotes,
    error: _error,
  } = useQuery<NotesPageData>(QUERY, {
    variables: { userId: session?.user?.id },
  });
  const { notebooks } = data || { notebooks: [] };
  const [selectedNotebookId, setSelectedNotebookId] = useState<number | null>(
    notebooks.length ? notebooks[0].id : null
  );
  const [createNotebook, { loading: loadingCreateNotebook }] = useMutation<{
    createNotebook: Notebook;
  }>(CREATE_NOTEBOOK, {
    update(cache, { data }) {
      const { createNotebook } = data || {};
      if (createNotebook) {
        cache.modify({
          fields: {
            dashboards(existingNotebooks = []) {
              const newNotebookRef = cache.writeFragment({
                data: createNotebook,
                fragment: gql`
                  fragment NewNotebook on Notebook {
                    ...NotebookFragment
                  }
                  ${notebookFragment}
                `,
                fragmentName: "NewNotebook",
              });
              return [...existingNotebooks, newNotebookRef];
            },
          },
        });
        if (!selectedNotebookId) {
          setSelectedNotebookId(createNotebook.id);
        }
      }
    },
  });
  const [updateNotebook, { loading: loadingUpdateNotebook }] = useMutation<{
    updateNotebook: Notebook;
  }>(UPDATE_NOTEBOOK);
  const [addingNewNotebook, setAddingNewNotebook] = useState(false);
  const [newNotebookName, setNewNotebookName] = useState("");
  const [creatingDefaultNotebook, setCreatingDefaultNotebook] = useState(false);
  const loading = loadingNotes || loadingCreateNotebook || loadingUpdateNotebook;
  // Create a new default notebook if there isn't one.
  useEffect(() => {
    if (session && !loading && !notebooks.length) {
      setCreatingDefaultNotebook(true);
      if (!creatingDefaultNotebook) {
        createNotebook({
          variables: {
            data: {
              title: "Default notebook",
              slug: "default-notebook",
              owner: {
                connect: {
                  id: session.user.id,
                },
              },
            },
          },
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  }, [
    session,
    loading,
    notebooks,
    createNotebook,
    creatingDefaultNotebook,
    setCreatingDefaultNotebook,
  ]);

  if (!session) return null;
  const handleNotebookChange = (notebookId: number) => {
    updateNotebook({
      variables: {
        notebookId,
        data: {},
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
      {creatingDefaultNotebook ? (
        <Box height="100%" display="flex" alignItems="center">
          <Typography variant="h5" textAlign="center">
            {"Creating default notebook..."}
          </Typography>
        </Box>
      ) : (
        <>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                position: "absolute",
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
                // theme.palette.mode === "light"
                //   ? theme.palette.secondary.light
                //   : theme.palette.secondary.dark,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar>
              <Typography component="h1" variant="h2">
                {"Notes"}
              </Typography>
            </Toolbar>
            <Divider />
            <List>
              {addingNewNotebook ? (
                <ListItem>
                  <TextField
                    autoFocus
                    placeholder="Notebook title"
                    variant="standard"
                    value={newNotebookName}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="create new notebook"
                            onClick={() => {
                              console.log("create new notebook");
                            }}
                            edge="end"
                          >
                            <DoneIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setNewNotebookName(e.target.value)}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                      } else if (event.key === "Escape") {
                        event.preventDefault();
                        setAddingNewNotebook(false);
                      }
                    }}
                  />
                </ListItem>
              ) : (
                <ListItem button onClick={() => setAddingNewNotebook(true)}>
                  <AddIcon /> {"New notebook"}
                </ListItem>
              )}
              {notebooks.map((notebook) => (
                <ListItem button key={notebook.title}>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    <ClassIcon />
                  </ListItemIcon>
                  <ListItemText primary={notebook.title} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box
            sx={{
              position: "relative",
              left: `${drawerWidth}px`,
              height: "100%",
              maxHeight: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              width: `calc(100% - ${drawerWidth}px)`,
            }}
          >
            <Paper
              sx={{
                width: "100%",
                maxWidth: "21cm", // A4 sheet of paper
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Toolbar>
                <Typography component="h2" variant="h1">
                  {"Note title"}
                </Typography>
              </Toolbar>
              <Box flexGrow={1} flexShrink={0}>
                <TextField
                  variant="filled"
                  placeholder="Type here..."
                  sx={{
                    height: "100%",
                    borderBottom: "none",
                    alignItems: "start",
                    "& .MuiFilledInput-root": {
                      alignItems: "start",
                      height: "100%",
                      borderBottom: "none",
                      borderRadius: "1px",
                    },
                  }}
                  // minRows={20}
                  fullWidth
                  multiline
                />
              </Box>
            </Paper>
          </Box>
        </>
      )}
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
