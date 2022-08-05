import { DocumentType, pre } from "@typegoose/typegoose";

export default interface Definition {
  name: string;
  modelImports?: string[];
  fields: Record<
    string,
    {
      required: boolean;
      unique?: boolean;
      type: string | CallableFunction | CallableFunction[];
      typeCast: string | CallableFunction | CallableFunction[];
      default?: unknown;
      select?: boolean;
    }
  >;
  hooks?: {
    save: {
      pre?: Parameters<typeof pre>[1];
      post?: (instance: DocumentType<unknown>) => void;
    };
  };
}

export const REQUIRED_STRING = { required: true, type: "String", typeCast: "String" };
export const OPTIONAL_STRING = { required: false, type: "String", typeCast: "String" };
export const OPTIONAL_BOOLEAN = { required: false, type: "Boolean", typeCast: "Boolean" };
