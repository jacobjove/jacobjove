import { gql } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import { useUser } from "@web/components/contexts/UserContext";
import SearchDialog from "@web/components/search/SearchDialog";
import { noteFragment } from "@web/graphql/generated/fragments/note.fragment";
// import Select from "@web/components/Select";
import { useCreateNotebook, useUpdateNotebook } from "@web/graphql/generated/hooks/notebook.hooks";
import Note from "@web/graphql/generated/types/Note";
import Notebook from "@web/graphql/generated/types/Notebook";
import { ID } from "@web/graphql/schema/types";
import { format } from "date-fns";
import partition from "lodash/partition";
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, useEffect, useMemo, useState } from "react";

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
  data: {
    notes: Note[];
    notebooks: Notebook[];
  };
  loading: boolean;
  error?: Error;
  selectedNotebook?: Notebook | null;
  setSelectedNotebookId: (id: string | null) => void;
  selectedNote?: Note | null;
  selectedNoteIdsState: [string[], Dispatch<string[]>];
  handleCreateNote: () => void;
}

export default function NotesMenu({
  data,
  loading: _loading,
  selectedNotebook,
  setSelectedNotebookId,
  selectedNote,
  selectedNoteIdsState,
  handleCreateNote,
}: NotesMenuProps) {
  const [selectedNoteIds, setSelectedNoteIds] = selectedNoteIdsState;
  const { user } = useUser();
  const { notes, notebooks: allNotebooks } = data;

  const [notebooks, _archivedNotebooks] = partition(allNotebooks, (notebook) => {
    return !notebook.archivedAt;
  });
  const filteredNotes = useMemo(() => {
    return selectedNotebook
      ? notes?.filter((note) => note.notebookId === selectedNotebook?.id) ?? []
      : notes;
  }, [selectedNotebook, notes]);
  const router = useRouter();
  const { isMobile } = useDeviceData();

  const [addingNewNotebook, setAddingNewNotebook] = useState(false);
  const [newNotebookName, setNewNotebookName] = useState("");

  const searchDialogState = usePopupState({ variant: "popover", popupId: `notes-search-dialog` });
  const notebookMenuState = usePopupState({
    variant: "popper",
    popupId: `notebook-${selectedNotebook?.id}-menu`,
  });

  const [createNotebook] = useCreateNotebook();
  const [updateNotebook] = useUpdateNotebook();

  // const loading = _loading || loadingCreateNotebook;

  // Create default notebook if necessary.
  // useEffect(() => {
  //   const needToCreateDefaultNotebook = !!user && !loading && !error && !allNotebooks.length;
  //   if (needToCreateDefaultNotebook) {
  //     (async () => {
  //       console.error("Creating first notebook...");
  //       return await createNotebook({
  //         variables: {
  //           data: {
  //             title: "Journal",
  //             owner: {
  //               connect: {
  //                 id: user.id,
  //               },
  //             },
  //           },
  //         },
  //       }).catch((error) => {
  //         console.error(error);
  //       });
  //     })();
  //   }
  // }, [user, loading, error, allNotebooks, createNotebook]);

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
        setSelectedNoteIds([firstNote.id]);
      }
    } else {
      // On mobile, if a note is selected, navigate to the detail page for that note.
      // This should only happen if the user switches from desktop to mobile, e.g.,
      // with dev tools.
      if (selectedNote) router.push(`/app/notes/${selectedNote.id}`);
    }
  }, [isMobile, router, filteredNotes, selectedNotebook, selectedNote, setSelectedNoteIds]);

  const handleCreateNotebook = async () => {
    const userId = user?.id as ID;
    setAddingNewNotebook(false);
    setNewNotebookName("");
    const data = {
      title: newNotebookName,
      userId,
    };
    const mutationResult = await createNotebook.current({
      variables: { data },
    });
    if (mutationResult?.data?.createNotebook?.id)
      setSelectedNotebookId(mutationResult.data.createNotebook.id);
  };

  const searchDialogProps = bindPopover(searchDialogState);
  const notebookMenuProps = bindMenu(notebookMenuState);

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
            "& svg": {
              fontSize: "1.25rem",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box
            sx={{
              p: "0.35rem !important",
              justifyContent: "center",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TreeView
              aria-label="Notebook navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              selected={selectedNotebook ? [selectedNotebook.id] : []}
              onNodeSelect={(_event: React.SyntheticEvent, nodeIds: string | string[]) => {
                const nodeId = Array.isArray(nodeIds) ? nodeIds[0] : nodeIds;
                if (nodeId === "root") return;
                setSelectedNotebookId(nodeId);
              }}
              sx={{
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "hidden",
                py: "0.4rem",
                // maxHeight: "100%",
                "& .MuiCollapse-root": {
                  ml: 0,
                },
              }}
              // expanded={notebookTreeExpanded ? ["0"] : []}
              defaultExpanded={["root"]}
            >
              <TreeItem nodeId={"root"} label="Notebooks">
                {notebooks.map((notebook, index) => {
                  return (
                    <TreeItem key={index} nodeId={`${notebook.id}`} label={notebook.title} />
                    // <TreeItem nodeId="6" label="MUI">
                    //   <TreeItem nodeId="8" label="index.js" />
                    // </TreeItem>
                  );
                })}
                {addingNewNotebook ? (
                  <TreeItem
                    nodeId={`NEW`}
                    label={
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
                                onClick={handleCreateNotebook}
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
                    }
                  />
                ) : null}
              </TreeItem>
            </TreeView>
            <IconButton
              sx={{
                alignSelf: "start",
              }}
              title={`Create a new notebook`}
              onClick={() => setAddingNewNotebook(true)}
              disableTouchRipple
            >
              <AddIcon />
            </IconButton>
          </Box>
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
              }}
            >
              <Box pl={1}>
                {selectedNotebook && (
                  <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="h2">{selectedNotebook.title}</Typography>
                    <IconButton {...bindTrigger(notebookMenuState)}>
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      {...notebookMenuProps}
                      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                      transformOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                      <MenuList dense>
                        <MenuItem
                          onClick={() => {
                            notebookMenuProps.onClose();
                            const archivedAt = new Date();
                            updateNotebook.current?.({
                              variables: {
                                where: { id: selectedNotebook.id },
                                data: { archivedAt },
                              },
                              optimisticResponse: {
                                updateNotebook: {
                                  __typename: "Notebook",
                                  ...selectedNotebook,
                                  archivedAt,
                                },
                              },
                            });
                            setSelectedNotebookId(notebooks[0].id);
                          }}
                        >
                          <DeleteIcon /> <Typography ml={"1rem"}>{"Delete notebook"}</Typography>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                )}
                <Box display="flex" alignItems={"center"} mt={1}>
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
                      title={`Create a new note`}
                      onClick={handleCreateNote}
                      disableTouchRipple
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
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
                        {...(!isMobile && {
                          onClick: (event) => {
                            event.preventDefault();
                            if (event.shiftKey) {
                              if (!selectedNote) return;
                              console.log(">>>", event.shiftKey);
                              const firstSelectedNoteIndex = notes.findIndex(
                                (_) => _.id === selectedNote?.id
                              );
                              const lastSelectedNoteIndex = notes.findIndex(
                                (_) => _.id === note.id
                              );
                              const slice =
                                lastSelectedNoteIndex > firstSelectedNoteIndex
                                  ? [firstSelectedNoteIndex, lastSelectedNoteIndex + 1]
                                  : [lastSelectedNoteIndex, firstSelectedNoteIndex + 1];
                              const noteIds = notes.slice(...slice).map((_) => _.id);
                              setSelectedNoteIds(noteIds);
                            } else {
                              setSelectedNoteIds([note.id]);
                            }
                          },
                        })}
                        selected={selectedNoteIds.includes(note.id)}
                        sx={{
                          "& .MuiListItemIcon-root": {
                            minWidth: "36px",
                          },
                        }}
                      >
                        {false && <Checkbox sx={{ pl: 0, mr: "0.25rem" }} />}
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
          idKey: "_id",
          labelKey: "title",
          searchableFieldKeys: ["title", "body"],
          getOptionKey: (option) => (typeof option === "string" ? option : option.id),
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
                    {"last updated"} {format(option.updatedAt, "M/d, h:mm a")}
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
              setSelectedNoteIds([option]);
            } else if (typeof option === "object") {
              setSelectedNoteIds([(option as unknown as Note).id]);
            } else {
              setSelectedNoteIds([]);
            }
            searchDialogProps.onClose();
          },
          throttleDelay: 500,
        }}
      />
    </>
  );
}
