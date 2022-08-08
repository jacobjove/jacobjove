import { DocumentType, pre } from "@typegoose/typegoose";
import { Model } from "./types";

export type FieldType = "String" | "Boolean" | "ID" | "DateTime";

export default interface Definition {
  name: string;
  modelImports?: string[];
  fields: Record<
    string,
    {
      required: boolean;
      unique?: boolean;
      type: string;
      typeCast?: string | CallableFunction | CallableFunction[];
      default?: unknown;
      select?: boolean;
    }
  >;
  hooks?: {
    save: {
      pre?: Parameters<typeof pre>[1];
      post?: (instance: DocumentType<Model>) => void;
    };
  };
}

export const REQUIRED_STRING = { required: true, type: "String" };
export const OPTIONAL_STRING = { required: false, type: "String" };
export const OPTIONAL_BOOLEAN = { required: false, type: "Boolean" };
