import Definition, { REQUIRED_STRING } from "@/graphql/schema/definition";

const goalFields = ["userId", "habitId", "parentId", "description"] as const;

type GoalFields = typeof goalFields[number];

const definition: Definition<GoalFields> = {
  name: "goal",
  fields: {
    userId: { required: true, type: "ID" },
    habitId: { required: false, type: "ID" },
    parentId: { required: false, type: "ID" },
    description: REQUIRED_STRING,
  },
};

export default definition;
