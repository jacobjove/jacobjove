import EditingModeTaskCells from "@/components/actions/EditingModeTaskCells";
import TaskRow from "@/components/actions/TaskRow";
import { taskFragment } from "@/graphql/fragments";
import { CREATE_TASK, UPDATE_TASK } from "@/graphql/mutations";
import { Task } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
// import { throttle } from "throttle-debounce";
import debounce from "lodash/debounce";
import partition from "lodash/partition";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";

export const fragment = gql`
  fragment TasksTable on Query {
    tasks(where: { userId: { equals: $userId } }) {
      ...TaskFragment
    }
  }
  ${taskFragment}
`;

interface TasksTableProps {
  contained?: boolean;
  data: {
    tasks: Task[];
  };
}

const PREFERRED_FONT_SIZE = "0.8rem";

const TasksTable: FC<TasksTableProps> = (props: TasksTableProps) => {
  const { data } = props;
  const { tasks: allTasks } = data;
  const { data: session } = useSession();

  const [updateTask, { loading: loadingUpdateTask }] = useMutation(UPDATE_TASK);
  const [addingNewTask, setAddingNewTask] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({});

  const [createTask, { loading: _loading }] = useMutation<{ createTask: Task }>(CREATE_TASK, {
    update(cache, { data }) {
      console.log("update", data);
      const { createTask } = data || {};
      if (createTask) {
        console.log("cache.modify...");
        cache.modify({
          fields: {
            tasks(existingTasks = []) {
              console.log("existingTasks", existingTasks);
              const newTaskRef = cache.writeFragment({
                data: createTask,
                fragment: gql`
                  fragment NewTask on Task {
                    ...TaskFragment
                  }
                  ${taskFragment}
                `,
                fragmentName: "NewTask",
              });
              return [...existingTasks, newTaskRef];
            },
          },
        });
      }
    },
  });

  // Exclude archived tasks.
  let filteredTasks = allTasks.filter((task) => !task.archivedAt);
  filteredTasks.sort((a, b) => (a.position > b.position ? 1 : -1));

  // If these are any top-level tasks, exclude the subtasks, since the top-level tasks
  // should already contain their subtasks. Otherwise, if there are no top-level tasks,
  // just show all the tasks, so that, e.g., a table of a task's subtasks can be
  // rendered in a task's detail dialog... TODO.
  const [topLevelTasks, subtasks] = partition(filteredTasks, (task) => {
    return !task.parentId;
  });
  filteredTasks = topLevelTasks.length ? topLevelTasks : subtasks;

  // Distinguish incomplete tasks from completed tasks.
  const [incompleteTasks, completeTasks] = partition(filteredTasks, (task) => {
    return !task.completedAt;
  });

  const orderedTasks = incompleteTasks;

  // Enable re-ordering the tasks.
  const moveTaskRow = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      console.log("moveTaskRow", dragIndex, hoverIndex);
      if (dragIndex === hoverIndex || loadingUpdateTask) return;
      console.log("moveTaskRow.throttle: Updating state...", dragIndex, hoverIndex);
      const draggedTask = orderedTasks[dragIndex];
      if (!draggedTask) {
        console.error("Unable to identify dragged task ID; the dragIndex is invalid.");
        return;
      }
    },
    [orderedTasks, loadingUpdateTask]
  );

  useEffect(() => {
    console.log("useEffect");
    debounce(() => {
      return Promise.all(
        orderedTasks.map((task, index) => {
          if (task.position === index) return;
          console.log("useEffect.debounce.updateTask");
          return updateTask({
            variables: {
              taskId: task.id,
              data: { position: { set: index } },
            },
            optimisticResponse: {
              updateTask: {
                __typename: "Task",
                subtasks: [],
                habit: null,
                ...task,
                position: index,
              },
            },
          });
        })
      ).catch((error) => {
        console.error(error);
      });
    }, 3000)();
  }, [orderedTasks, updateTask]);

  const renderTaskRow = (task: Task, index: number) => {
    return <TaskRow key={task.id} task={task} index={index} move={moveTaskRow} />;
  };

  const handleNewTaskFieldChange = (field: keyof Task, value: unknown) => {
    // console.log(field, value);
    setNewTask({ ...newTask, [field]: value });
  };
  const handleNewTaskSubmit = async () => {
    setAddingNewTask(false);
    if (session?.user) {
      await createTask({
        variables: {
          data: {
            ...newTask,
            position: orderedTasks.length,
            user: {
              connect: {
                id: session.user.id,
              },
            },
          },
        },
        optimisticResponse: {
          createTask: {
            title: "",
            dueDate: null,
            description: null,
            habit: null,
            parentId: null,
            subtasks: [],
            completedAt: null,
            archivedAt: null,
            position: orderedTasks.length,
            createdAt: new Date().toISOString(),
            ...newTask,
            __typename: "Task",
            id: -1,
          },
        },
      }).catch((error) => {
        console.error(error);
      });
    }
    setNewTask({});
  };
  return (
    <div>
      <Box display="flex" padding="0.25rem">
        <Box marginLeft="auto">
          <IconButton
            title={"Add task"}
            size="small"
            onClick={() => {
              console.log("handle click");
            }}
          >
            <AddIcon />
          </IconButton>
          <Link href="/habits" passHref>
            <IconButton component={"a"} color="info" title="Explore habits">
              <SearchIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <TableContainer>
        <Table
          sx={{
            minWidth: 100,
            "& th": { padding: 0 },
            "& td": { padding: 0, fontSize: PREFERRED_FONT_SIZE },
          }}
          size="small"
          aria-label="table of tasks"
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Task</TableCell>
              <TableCell style={{ width: "5rem", textAlign: "center" }}>Due date</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedTasks.map((task, index) => renderTaskRow(task, index))}
            <TableRow>
              {(addingNewTask && (
                <EditingModeTaskCells
                  task={newTask}
                  handleFieldChange={handleNewTaskFieldChange}
                  handleSubmit={handleNewTaskSubmit}
                  handleCancel={() => setAddingNewTask(false)}
                />
              )) || (
                <>
                  <TableCell colSpan={2} />
                  <TableCell colSpan={5}>
                    <Button
                      variant="text"
                      onClick={() => setAddingNewTask(true)}
                      sx={{
                        textTransform: "none",
                        fontStyle: "italic",
                        color: (theme) =>
                          theme.palette.mode === "light" ? "lightgray" : "darkgray",
                        py: "0.25rem",
                        width: "100%",
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      {incompleteTasks.length ? "Add another task..." : "Add a task..."}
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
            {!!completeTasks.length && (
              <>
                <TableRow>
                  <TableCell colSpan={7} style={{ paddingTop: "1rem", paddingBottom: "0.25rem" }}>
                    <Typography variant="h4" mx="0.25rem">
                      {"Recently completed"}
                    </Typography>
                  </TableCell>
                </TableRow>
                {completeTasks.map((task) => (
                  <TaskRow key={task.id} task={task} />
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TasksTable;

// import * as React from 'react';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';

// interface Data {
//   calories: number;
//   carbs: number;
//   fat: number;
//   name: string;
//   protein: number;
// }

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ): Data {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// type Order = 'asc' | 'desc';

// function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key,
// ): (
//   a: { [key in Key]: number | string },
//   b: { [key in Key]: number | string },
// ) => number {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
//   const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// interface HeadCell {
//   disablePadding: boolean;
//   id: keyof Data;
//   label: string;
//   numeric: boolean;
// }

// const headCells: readonly HeadCell[] = [
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: false,
//     label: 'Calories',
//   },
// ];

// interface EnhancedTableProps {
//   numSelected: number;
//   onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   order: Order;
//   orderBy: string;
//   rowCount: number;
// }

// function EnhancedTableHead(props: EnhancedTableProps) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler =
//     (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
//       onRequestSort(event, property);
//     };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// interface EnhancedTableToolbarProps {
//   numSelected: number;
// }

// const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState<Order>('asc');
//   const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
//   const [selected, setSelected] = React.useState<readonly string[]>([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data,
//   ) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected: readonly string[] = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name: string) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {/* if you don't need to support IE11, you can replace the `stableSort` call with:
//               rows.slice().sort(getComparator(order, orderBy)) */}
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             'aria-labelledby': labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.calories}</TableCell>
//                       <TableCell align="right">{row.fat}</TableCell>
//                       <TableCell align="right">{row.carbs}</TableCell>
//                       <TableCell align="right">{row.protein}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={7} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }
