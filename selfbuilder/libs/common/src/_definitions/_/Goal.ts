import Definition, { REQUIRED_STRING } from "@common/definition";

const goalFields = ["userId", "habitId", "parentId", "description"] as const;

type GoalFields = typeof goalFields[number];

const definition: Definition<GoalFields> = {
  name: "goal",
  fields: {
    userId: { required: true, type: "ID", ref: "User" },
    habitId: { required: false, type: "ID", ref: "Habit" },
    parentId: { required: false, type: "ID", ref: "Goal" },
    description: REQUIRED_STRING,
  },
};

export default definition;
