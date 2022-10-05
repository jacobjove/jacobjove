import Definition from "@common/definition";

const shelfFields = ["ownerId"] as const;

type ShelfFields = typeof shelfFields[number];

const definition: Definition<ShelfFields> = {
  name: "shelf",
  fields: {
    ownerId: { required: true, type: "ID", ref: "User" },
  },
};

export default definition;
