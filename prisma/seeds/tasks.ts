import { addDays } from "date-fns";

const tasks = [
  {
    title: "Deal with pension stuff",
    dueDate: addDays(new Date(), 3),
    subtasks: [
      {
        title: "Find pension papers",
        dueDate: addDays(new Date(), 2),
        description: "It should be in the stack of papers.",
        rank: 0,
      },
      {
        title: "Contact the agency",
        dueDate: addDays(new Date(), 3),
        rank: 1,
      },
    ],
    rank: 0,
  },
  {
    title: "Do something simple",
    dueDate: addDays(new Date(), 7),
    description: "Simplicity is the ultimate sophistication.",
    rank: 1,
  },
  {
    title: "Clean the table",
    dueDate: addDays(new Date(), 5),
    description: "Just do it.",
    rank: 2,
  },
  {
    title: "Do something that has already been done",
    dueDate: addDays(new Date(), 30),
    description: "Just do it.",
    completedAt: new Date(),
    rank: 3,
  },
];

export default tasks;
