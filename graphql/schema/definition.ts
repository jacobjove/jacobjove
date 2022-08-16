import * as Models from "@/graphql/generated/models";
import { DocumentType, pre } from "@typegoose/typegoose";
import { camelize } from "inflection";
import { Model } from "./types";

export type FieldType =
  | "Array"
  | "Boolean"
  | "DateTime"
  | "ID"
  | "Int"
  | "Map"
  | "Number"
  | "String";

export const TYPE_MAP: Record<
  FieldType,
  {
    type: string | ((arg: string) => string);
    caster: string | ((arg: string) => string);
    yup: string | ((arg: string) => string);
  }
> = {
  Array: {
    type: (arg) => `${arg in TYPE_MAP ? TYPE_MAP[arg as keyof typeof TYPE_MAP].type : arg}[]`,
    caster: (arg) => `[${arg in TYPE_MAP ? TYPE_MAP[arg as keyof typeof TYPE_MAP].caster : arg}]`,
    yup: (arg) =>
      `array().of(${
        arg in TYPE_MAP
          ? TYPE_MAP[arg as keyof typeof TYPE_MAP].yup
          : camelize(arg, true) + "CreationInputSchema"
      }.required())`,
  },
  Boolean: {
    type: "boolean",
    caster: "Boolean",
    yup: "bool()",
  },
  DateTime: {
    type: "Date",
    caster: "DateTimeScalar",
    yup: "date()",
  },
  ID: {
    type: "string",
    caster: "ObjectIdScalar",
    yup: "string()",
  },
  Int: {
    type: "number",
    caster: "Int",
    yup: "number()",
  },
  Map: {
    type: "Record<string, unknown>",
    caster: "JSONResolver",
    yup: "object()",
  },
  Number: {
    type: "number",
    caster: "Number",
    yup: "number()",
  },
  String: {
    type: "string",
    caster: "String",
    yup: "string()",
  },
};

export function getType(field: Field): string {
  const fieldType = TYPE_MAP[field.type].type;
  if (typeof fieldType === "function" && field.typeArg) return fieldType(field.typeArg);
  if (typeof fieldType == "string") return fieldType;
  return field.type;
}

export function getConstructor(field: Field): string {
  const fieldTypeCaster = TYPE_MAP[field.type].caster;
  if (typeof fieldTypeCaster === "function" && field.typeArg) return fieldTypeCaster(field.typeArg);
  if (typeof fieldTypeCaster == "string") return fieldTypeCaster;
  return field.type;
}

export function getYup(field: Field): string {
  const fieldYup = TYPE_MAP[field.type].yup;
  if (typeof fieldYup === "function" && field.typeArg) return fieldYup(field.typeArg);
  if (typeof fieldYup == "string") return fieldYup;
  return field.type;
}

export type Field = {
  label?: string;
  required: boolean;
  unique?: boolean;
} & (
  | {
      type: "Array";
      typeArg: FieldType | keyof typeof Models;
    }
  | {
      type: "Map";
      shape?: { [key: string]: Field };
    }
  | {
      type: "String";
      choices?: string[];
    }
  | {
      type: Exclude<FieldType, "Array" | "Map" | "String">;
    }
) & {
    typeArg?: FieldType | keyof typeof Models;
    typeCast?: string | CallableFunction | CallableFunction[];
    default?: unknown;
    select?: boolean;
    widget?: {
      multiline?: boolean;
      fullWidth?: boolean;
      placeholder?: string;
    };
    initialize?: boolean;
  };

export default interface Definition {
  name: string;
  modelImports?: string[];
  fields: Record<string, Field>;
  hooks?: {
    save: {
      pre?: Parameters<typeof pre>[1];
      post?: (instance: DocumentType<Model>) => void;
    };
  };
}

export const REQUIRED_STRING: Field = { required: true, type: "String" };
export const OPTIONAL_STRING: Field = { required: false, type: "String" };
export const OPTIONAL_BOOLEAN: Field = { required: false, type: "Boolean" };
