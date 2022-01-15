const acts = [
  {
    id: 1,
    name: "Exercising",
    slug: "exercising",
    description:
      "Exercising is what exercisers do. It's a great way to get in shape and stay healthy.",
  },
  {
    name: "Running",
    slug: "running",
    description: "Running is what runners do.",
    parentId: 1,
  },
  {
    name: "Reading",
    slug: "reading",
    description: "Reading is what readers do.",
  },
  {
    name: "Push-ups",
    slug: "push-ups",
    description: "Push-ups are what strong people do.",
    parentId: 1,
  },
  {
    name: "Pull-ups",
    slug: "pull-ups",
    description: "Pull-ups are what strong people do.",
    parentId: 1,
  },
];

export default acts;
