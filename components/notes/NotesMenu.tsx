import DeviceContext from "@/components/contexts/DeviceContext";
import { useUser } from "@/components/contexts/UserContext";
import SearchDialog from "@/components/search/SearchDialog";
import Select from "@/components/Select";
import { notebookFragment, noteFragment } from "@/graphql/fragments";
import { Note, Notebook } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { format, parseISO } from "date-fns";
import partition from "lodash/partition";
import {
  bindHover,
  bindMenu,
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const CREATE_NOTEBOOK = gql`
  mutation CreateNotebook($data: NotebookCreateInput!) {
    createNotebook(data: $data) {
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

interface NotesMenuProps {
  notes: Note[] | undefined;
  loading: boolean;
  error?: Error;
  selectedNotebook?: Notebook | null;
  setSelectedNotebookId: (id: string | null) => void;
  selectedNote?: Note | null;
  setSelectedNoteId: (id: string | null) => void;
  handleCreateNote: () => void;
}

export default function NotesMenu({
  notes,
  loading: _loading,
  error,
  selectedNotebook,
  setSelectedNotebookId,
  selectedNote,
  setSelectedNoteId,
  handleCreateNote,
}: NotesMenuProps) {
  const user = useUser();
  const allNotebooks = user?.notebooks ?? [];
  const [notebooks, _archivedNotebooks] = partition(allNotebooks, (notebook) => {
    return !notebook.archivedAt;
  });
  const filteredNotes = selectedNotebook
    ? notes?.filter((note) => note.notebookId === selectedNotebook?.id) ?? []
    : notes;
  const router = useRouter();
  const { isMobile } = useContext(DeviceContext);
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
    const needToCreateDefaultNotebook = !!user && !loading && !error && !allNotebooks.length;
    if (needToCreateDefaultNotebook) {
      (async () => {
        console.error("Creating first notebook...");
        return await createNotebook({
          variables: {
            data: {
              title: "Journal",
              owner: {
                connect: {
                  id: user.id,
                },
              },
            },
          },
        }).catch((error) => {
          console.error(error);
        });
      })();
    }
  }, [user, loading, error, allNotebooks, createNotebook]);

  // Select the default notebook.
  useEffect(() => {
    if (notebooks.length && !selectedNotebook) {
      setSelectedNotebookId(notebooks[0].id);
    }
  }, [notebooks, selectedNotebook, setSelectedNotebookId]);

  // On desktop (i.e., if not on a mobile device), select the last-updated note
  // so that it is displayed in the right pane. On mobile, don't do anything, since
  // selecting a note results in navigating to a separate page for the selected note.
  useEffect(() => {
    if (!isMobile) {
      const firstNote = filteredNotes?.[0];
      if (selectedNotebook && !selectedNote && firstNote) {
        setSelectedNoteId(firstNote.id);
      }
    } else {
      // On mobile, if a note is selected, navigate to the detail page for that note.
      // This should only happen if the user switches from desktop to mobile, e.g.,
      // with dev tools.
      if (selectedNote) router.push(`/app/notes/${selectedNote.id}`);
    }
  }, [isMobile, router, selectedNotebook, selectedNote, setSelectedNoteId]);

  const handleCreateNotebook = () => {
    const now = new Date();
    const ownerId = user?.id as string;
    createNotebook({
      variables: {
        data: {
          title: newNotebookName,
          owner: {
            connect: {
              id: ownerId,
            },
          },
        },
      },
      optimisticResponse: {
        createNotebook: {
          __typename: "Notebook",
          ownerId,
          title: newNotebookName,
          archivedAt: null,
          createdAt: now,
          updatedAt: now,
          isPublic: false,
          notes: [],
          id: "tmp-id",
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
          ...(isMobile ? { width: "100%" } : {}),
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
              justifyContent: "center",
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
                    nativeSelectLabel: "+ Create new notebook",
                    onSelect: () => setAddingNewNotebook(true),
                  },
                ]}
                onChange={(value) => setSelectedNotebookId(value)}
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
                  <Typography component={"div"} fontSize={"0.8rem"} minWidth={"3rem"}>
                    {`${filteredNotes?.length ?? 0} note${filteredNotes?.length != 1 ? "s" : ""}`}
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
                  {filteredNotes?.map((note) => (
                    // TODO: look into prefetching policy:
                    // https://nextjs.org/docs/api-reference/next/link
                    <Link key={note.id} href={`/app/notes/${note.id}`} passHref>
                      <ListItemButton
                        component="a"
                        {...(!isMobile
                          ? {
                              onClick: (event) => {
                                if (!isMobile) {
                                  event.preventDefault();
                                  setSelectedNoteId(note.id);
                                }
                              },
                            }
                          : {})}
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
                          secondary={format(note.updatedAt, "M/d, h:mm a")}
                          sx={{
                            "& .MuiListItemText-secondary": {
                              fontSize: "0.75rem",
                            },
                          }}
                        />
                      </ListItemButton>
                    </Link>
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
          autocompleteProps: {
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
          },
          onChange: (option) => {
            // TODO: fix these janky types!
            if (typeof option === "string") {
              setSelectedNoteId(option);
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
