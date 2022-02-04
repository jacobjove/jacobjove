import Layout from "@/components/Layout";
import SearchDialog from "@/components/search/SearchDialog";
import Select from "@/components/Select";
import { notebookFragment, noteFragment } from "@/graphql/fragments";
// import ListSubheader from "@mui/material/ListSubheader";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
import { Note, Notebook } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useMutation, useQuery } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { format, parseISO } from "date-fns";
import debounce from "lodash/debounce";
import partition from "lodash/partition";
import {
  bindHover,
  bindMenu,
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useEffect, useRef, useState } from "react";

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

const SEARCH_QUERY = gql`
  query GetNotes($where: NoteWhereInput!, $orderBy: [NoteOrderByWithRelationInput!]) {
    notes(where: $where, orderBy: $orderBy) {
      ...NoteFragment
    }
  }
  ${noteFragment}
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
    error,
  } = useQuery<NotesPageData>(QUERY, {
    variables: { userId: session?.user?.id },
  });

  const [selectedNotebookId, setSelectedNotebookId] = useState<number | null>(null);
  const selectedNotebook = data?.notebooks?.find((nb) => nb.id === selectedNotebookId);
  const notes = selectedNotebook?.notes;

  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);
  const selectedNote = notes?.find((note) => note.id === selectedNoteId);
  const [noteTitle, setNoteTitle] = useState(selectedNote?.title);
  const [noteBody, setNoteBody] = useState(selectedNote?.body);

  const [updateNotebook, { loading: loadingUpdateNotebook }] = useMutation<{
    updateNotebook: Notebook;
  }>(UPDATE_NOTEBOOK);
  const [updateNote, { loading: loadingUpdateNote }] = useMutation<{
    updateNotebook: Notebook;
  }>(UPDATE_NOTE);
  const [createNote, { loading: loadingCreateNote }] = useMutation<{
    createNote: Note;
  }>(CREATE_NOTE, {
    update(cache, { data }) {
      const { createNote } = data || {};
      if (createNote) {
        cache.modify({
          fields: {
            notes(existingNotes = []) {
              const newNoteRef = cache.writeFragment({
                data: createNote,
                fragment: gql`
                  fragment NewNote on Note {
                    ...NoteFragment
                  }
                  ${noteFragment}
                `,
                fragmentName: "NewNote",
              });
              return [...existingNotes, newNoteRef];
            },
          },
        });
      }
    },
  });

  const abortController = useRef<AbortController>();
  const handleUpdateNote = useRef(
    debounce(
      (...args: Parameters<typeof updateNote>) => {
        const controller = new window.AbortController();
        abortController.current = controller;
        const [mutationOptions, ...rest] = args;
        if (mutationOptions) {
          mutationOptions.context = { fetchOptions: { signal: controller.signal } };
        }
        return (
          Promise.resolve(updateNote(mutationOptions, ...rest))
            // .then(() => console.log())
            .catch((error) => console.error(error))
        );
      },
      1200 // 1.2 seconds
    )
  );
  const abortLatest = () => {
    if (abortController.current) {
      abortController.current.abort();
    }
  };

  const loading = loadingNotes || loadingCreateNote || loadingUpdateNotebook || loadingUpdateNote;

  // Update state when a different note is selected.
  useEffect(() => {
    if (selectedNote) {
      setNoteTitle(selectedNote.title);
      setNoteBody(selectedNote.body);
    }
  }, [selectedNote, setNoteTitle, setNoteBody]);

  if (!session) return null;

  const handleCreateNote = () => {
    const title = "Untitled note";
    const body = "";
    const creationDateISO = new Date().toISOString();
    if (!data?.notebooks[0].id) {
      console.error("No notebooks found.");
      return;
    }
    const notebookId = selectedNotebook?.id || data?.notebooks[0].id; // TODO
    createNote({
      variables: {
        data: {
          title,
          body,
          notebook: { connect: { id: notebookId } },
        },
      },
      optimisticResponse: {
        createNote: {
          title,
          body,
          isPublic: false,
          notebookId: notebookId,
          createdAt: creationDateISO,
          updatedAt: creationDateISO,
          archivedAt: null,
          __typename: "Note",
          id: -1,
        },
      },
    }).catch((error) => {
      console.error(error);
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
      <Box position="relative" display="flex" height="100%">
        <NotesMenu
          data={data}
          loading={loading}
          error={error}
          selectedNotebook={selectedNotebook}
          setSelectedNotebookId={setSelectedNotebookId}
          selectedNote={selectedNote}
          setSelectedNoteId={setSelectedNoteId}
          handleCreateNote={handleCreateNote}
          session={session}
        />
        {!data?.notebooks?.length ? (
          <Box
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Typography variant="h5" textAlign="center" justifyContent={"center"}>
              {loading ? "Loading..." : "Creating default notebook..."}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              position: "relative",
              height: "100%",
              maxHeight: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {selectedNote ? (
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
                  <TextField
                    variant="standard"
                    value={noteTitle || "Untitled note"}
                    onChange={(event) => {
                      setNoteTitle(event.target.value);
                      abortLatest();
                      handleUpdateNote.current({
                        variables: {
                          noteId: selectedNote.id,
                          data: {
                            title: { set: event.target.value },
                          },
                        },
                      });
                    }}
                  />
                </Toolbar>
                <Box flexGrow={1} flexShrink={0}>
                  <TextField
                    fullWidth
                    multiline
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
                    value={noteBody || ""}
                    onChange={(event) => {
                      setNoteBody(event.target.value);
                      abortLatest();
                      handleUpdateNote.current({
                        variables: {
                          noteId: selectedNote.id,
                          data: {
                            body: { set: event.target.value },
                          },
                        },
                      });
                    }}
                  />
                </Box>
              </Paper>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {"Select a note from the menu, or"}
                &nbsp;
                <Button
                  variant="text"
                  sx={{
                    m: 0,
                    p: 0,
                    textTransform: "none",
                    fontSize: "inherit",
                  }}
                  onClick={handleCreateNote}
                >
                  {"create a new one"}
                </Button>
                {"."}
              </Box>
            )}
          </Box>
        )}
      </Box>
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

interface NotesMenuProps {
  data?: NotesPageData;
  loading: boolean;
  error?: Error;
  selectedNotebook?: Notebook | null;
  setSelectedNotebookId: (id: number | null) => void;
  selectedNote?: Note | null;
  setSelectedNoteId: (id: number | null) => void;
  session: Session;
  // createNote: (
  //   options: MutationHookOptions<{ createNote: Note }>
  // ) => Promise<FetchResult<{ createNote: Note }, Record<string, any>, Record<string, any>>>;
  handleCreateNote: () => void;
}

function NotesMenu({
  data,
  loading: _loading,
  error,
  selectedNotebook,
  setSelectedNotebookId,
  selectedNote,
  setSelectedNoteId,
  handleCreateNote,
  session,
}: NotesMenuProps) {
  const { notebooks: allNotebooks } = data || { notebooks: [] };
  const [notebooks, archivedNotebooks] = partition(allNotebooks, (notebook) => {
    return !notebook.archivedAt;
  });
  const [addingNewNotebook, setAddingNewNotebook] = useState(false);
  const [newNotebookName, setNewNotebookName] = useState("");
  const searchDialogState = usePopupState({ variant: "popover", popupId: `notes-search-dialog` });
  const creationMenuState = usePopupState({ variant: "popper", popupId: `notes-creation-menu` });
  const [createNotebook, { loading: loadingCreateNotebook }] = useMutation<{
    createNotebook: Notebook;
  }>(CREATE_NOTEBOOK, {
    update(cache, { data }) {
      const { createNotebook } = data || {};
      if (createNotebook) {
        cache.modify({
          fields: {
            notebooks(existingNotebooks = []) {
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
      }
    },
  });

  const loading = _loading || loadingCreateNotebook;

  // Create default notebook if necessary.
  useEffect(() => {
    const needToCreateDefaultNotebook =
      !!session && !!data && !loading && !error && !allNotebooks.length;
    if (needToCreateDefaultNotebook) {
      (async () =>
        await createNotebook({
          variables: {
            data: {
              title: "Journal",
              owner: {
                connect: {
                  id: session.user.id,
                },
              },
            },
          },
        }).catch((error) => {
          console.error(error);
        }))();
    }
  }, [session, data, loading, error, allNotebooks, createNotebook]);

  // Select the default notebook.
  useEffect(() => {
    if (notebooks.length && !selectedNotebook) {
      setSelectedNotebookId(notebooks[0].id);
    }
  }, [notebooks, selectedNotebook, setSelectedNotebookId]);

  // Select the latest "new" (blank) note if one is present. This might help
  // the user to avoid creating multiple empty, untitled notes.
  useEffect(() => {
    const firstNote = selectedNotebook?.notes?.[0];
    if (selectedNotebook && !selectedNote && firstNote) {
      setSelectedNoteId(firstNote.id);
    }
  }, [selectedNotebook, selectedNote, setSelectedNoteId]);

  const handleCreateNotebook = () => {
    const dateISO = new Date().toISOString();
    createNotebook({
      variables: {
        data: {
          title: newNotebookName,
          owner: {
            connect: {
              id: session.user.id,
            },
          },
        },
      },
      optimisticResponse: {
        createNotebook: {
          title: newNotebookName,
          archivedAt: null,
          createdAt: dateISO,
          updatedAt: dateISO,
          isPublic: false,
          notes: [],
          __typename: "Notebook",
          id: -1,
        },
      },
    })
      .then((result) => {
        const { createNotebook } = result.data || {};
        if (createNotebook) {
          setSelectedNotebookId(createNotebook.id);
          setAddingNewNotebook(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchDialogProps = bindPopover(searchDialogState);

  return (
    <>
      <Box
        width={`${drawerWidth}px`}
        sx={{
          position: "relative",
          height: "100%",
          m: 0,
        }}
      >
        <Drawer
          sx={{
            width: "100%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              position: "absolute",
              width: "100%",
              px: 0,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar
            sx={{
              px: "0.35rem !important",
              // paddingRight: "0.25rem !important",
            }}
          >
            {addingNewNotebook ? (
              <TextField
                autoFocus
                placeholder="Notebook title"
                variant="standard"
                value={newNotebookName}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Create new notebook"
                        onClick={() => handleCreateNotebook()}
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
                    handleCreateNotebook();
                  } else if (event.key === "Escape") {
                    event.preventDefault();
                    setAddingNewNotebook(false);
                  }
                }}
              />
            ) : (
              <Select
                fullWidth
                name={"notebook"}
                value={selectedNotebook?.id.toString() ?? ""}
                options={[
                  ...notebooks.map((notebook) => ({
                    value: `${notebook.id}`,
                    label: notebook.title,
                  })),
                  {
                    value: "",
                    label: (
                      <>
                        <AddIcon /> {"Create new notebook"}
                      </>
                    ),
                    mobileLabel: "+ Create new notebook",
                    onSelect: () => setAddingNewNotebook(true),
                  },
                ]}
                onChange={(value) => setSelectedNotebookId(parseInt(value))}
              />
            )}
          </Toolbar>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                height: "100%",
                p: 1,
                borderRight: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box display="flex" alignItems={"center"} pl={1}>
                {!!selectedNotebook && (
                  <Typography fontSize={"0.8rem"}>
                    {`${selectedNotebook?.notes.length} note${
                      selectedNotebook?.notes.length != 1 ? "s" : ""
                    }`}
                  </Typography>
                )}
                <Box
                  ml="auto"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  <IconButton>
                    <SortIcon />
                  </IconButton>
                  <IconButton>
                    <FilterAltIcon />
                  </IconButton>
                  <IconButton title={`Search notes`} {...bindTrigger(searchDialogState)}>
                    <SearchIcon />
                  </IconButton>
                  <IconButton
                    title={`Create a new note or notebook`}
                    {...bindTrigger(creationMenuState)}
                    {...bindHover(creationMenuState)}
                    disableTouchRipple
                  >
                    <AddIcon />
                  </IconButton>
                  <HoverMenu
                    {...bindMenu(creationMenuState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    // MenuListProps={{
                    //   "aria-labelledby": "calendar-menu-button-x",
                    // }}
                  >
                    <MenuItem onClick={handleCreateNote}>{"New note"}</MenuItem>
                    <MenuItem onClick={() => setAddingNewNotebook(true)}>{"New notebook"}</MenuItem>
                  </HoverMenu>
                </Box>
              </Box>
              {selectedNotebook && (
                <List>
                  {selectedNotebook.notes.map((note) => (
                    <ListItem
                      button
                      key={note.id}
                      onClick={() => setSelectedNoteId(note.id)}
                      selected={selectedNote?.id === note.id}
                      sx={{
                        "& .MuiListItemIcon-root": {
                          minWidth: "36px",
                        },
                      }}
                    >
                      <ListItemIcon>
                        <TextSnippetIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={note.title}
                        secondary={format(parseISO(note.updatedAt), "M/d, h:mm a")}
                        sx={{
                          "& .MuiListItemText-secondary": {
                            fontSize: "0.75rem",
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          </Box>
        </Drawer>
      </Box>
      <SearchDialog
        {...searchDialogProps}
        header={"Search notes"}
        searchProps={{
          label: "Search",
          query: SEARCH_QUERY,
          dataKey: "notes",
          idKey: "id",
          labelKey: "title",
          searchableFieldKeys: ["title", "body"],
          getOptionKey: (option) => `${option.id}`,
          renderOption: (props, option) => {
            return (
              <li
                {...props}
                style={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <Typography>{option.title}</Typography>&nbsp;&nbsp;
                <Typography component={"small"} fontSize={"0.75rem"} color={"textSecondary"}>
                  {"last updated"} {format(parseISO(option.updatedAt), "M/d, h:mm a")}
                </Typography>
              </li>
            );
          },
          groupBy: (option) =>
            notebooks.find((notebook) => `${notebook.id}` == option.notebookId)?.title ?? "",
          onChange: (option) => {
            // TODO: fix these janky types!
            if (typeof option === "string") {
              setSelectedNoteId(parseInt(option));
            } else if (typeof option === "object") {
              setSelectedNoteId((option as unknown as Note).id);
            } else {
              setSelectedNoteId(null);
            }
            searchDialogProps.onClose();
          },
          throttleDelay: 500,
        }}
      />
    </>
  );
}
