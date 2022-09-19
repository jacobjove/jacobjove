import { FieldPolicy } from "@apollo/client";

export const dateTimeTypePolicy: FieldPolicy<string | null, Date | null> = {
  read: (value) => {
    if (typeof value === "string") return new Date(value);
    return value;
  },
  // merge: (_, incoming) => {
  //   if (typeof incoming === "string") return new Date(incoming);
  //   return incoming;
  // },
};
