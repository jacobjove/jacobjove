import { ID, Model } from "@web/graphql/schema/types";
import { RequiredKeys } from "@web/types/global";
import { Dispatch, useReducer } from "react";

const ID_FIELDS = ["_id", "id"] as const;

const READONLY_FIELDS = [...ID_FIELDS, "__typename", "createdAt", "updatedAt"] as const;

type ReadonlyFields = typeof READONLY_FIELDS[number];

type PotentiallyRequiredFields<T extends Model> = Exclude<keyof T, ReadonlyFields>;

export type InputData<T extends Model> = RequiredKeys<Omit<T, ReadonlyFields>> & Partial<T>;
export type InitialData<T extends Model, RequiredFields extends PotentiallyRequiredFields<T>> =
  | T
  | (Pick<T, RequiredFields> & Partial<InputData<T>>);

function initializeData<T>(initialData: T): T {
  return {
    // title: "",
    // description: "",
    // dueDate: null,
    // parentId: null,
    ...initialData,
  };
}

// export type Payload<T> = {
//   field: "init" | keyof T;
//   value: T | T[keyof T];
// };

export type Payload<T> =
  | {
      field: "init";
      value: Partial<T>;
    }
  | {
      field: keyof T;
      value: T[keyof T];
    };

export function itemReducer<T>(state: T, payload: { field: "init"; value: T }): T;
export function itemReducer<T>(state: T, payload: { field: keyof T; value: T[keyof T] }): T;
export function itemReducer<T>(state: T, payload: Payload<T>) {
  if (payload.field === "init") return payload.value as T;
  return { ...state, [payload.field]: payload.value };
}

export function useItemReducer<T>(initialData: T): [T, Dispatch<Payload<T>>] {
  const [data, dispatchData] = useReducer(itemReducer, initialData, initializeData);
  // TODO
  return [data as T, dispatchData as Dispatch<Payload<T>>];
}

export type ArrayAction<T extends { id: ID }> =
  | {
      type: "append";
      payload: T;
    }
  | {
      type: "insert";
      payload: {
        item: T;
        index: number;
      };
    }
  | {
      type: "updateItem";
      payload: {
        id: T["id"];
        item: T;
      };
    }
  | {
      type: "move";
      payload: {
        id: T["id"];
        index: number;
      };
    }
  | {
      type: "remove";
      payload: {
        id: T["id"];
      };
    }
  | {
      type: "init";
      payload: T[];
    };

export function arrayReducer<T extends { id: ID }>(state: T[], action: ArrayAction<T>) {
  let array: T[];
  let item: T | undefined;
  let index: number;
  switch (action.type) {
    case "init":
      return action.payload;
    case "append":
      return [...state, action.payload];
    case "move":
      item = state.find((_) => _.id === action.payload.id);
      if (!item) return state;
      array = state.filter((_) => _.id !== action.payload.id);
      console.log("moving item", item, "to index", action.payload.index);
      return [...array.slice(0, action.payload.index), item, ...array.slice(action.payload.index)];
    case "insert":
      return [
        // part of the array before the specified index
        ...state.slice(0, action.payload.index),
        // inserted item
        action.payload.item,
        // part of the array after the specified index
        ...state.slice(action.payload.index),
      ];
    case "updateItem":
      index = state.findIndex((_) => _.id === action.payload.id);
      return [...state.slice(0, index), action.payload.item, ...state.slice(index + 1)];
    case "remove":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
