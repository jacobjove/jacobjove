import * as Types from "@/graphql/generated/types";
// import { Model } from "@/graphql/schema/types";
import { DocumentType } from "@typegoose/typegoose";
import { camelize } from "inflection";
import JSON5 from "json5";
import { Model } from "./types";

declare type ReturnVoid = void | Promise<void>;
declare type HookNextErrorFn = (err?: Error) => ReturnVoid;
type PreFnWithDocumentType<T> = (this: DocumentType<T>, next: HookNextErrorFn) => ReturnVoid;

export type FieldType =
  | "Array"
  | "Boolean"
  | "DateTime"
  | "ID"
  | "Int"
  | "Map"
  | "Number"
  | "String";

type Mutation = "create" | "update";

export const TYPE_MAP: Record<
  FieldType,
  {
    type: string | ((arg: string, mutation?: Mutation) => string);
    caster: string | ((arg: string, mutation?: Mutation) => string);
    yup: string | ((arg: string, mutation: Mutation) => string);
  }
> = {
  Array: {
    type: (arg) => `${arg in TYPE_MAP ? TYPE_MAP[arg as keyof typeof TYPE_MAP].type : arg}[]`,
    caster: (arg) => `[${arg in TYPE_MAP ? TYPE_MAP[arg as keyof typeof TYPE_MAP].caster : arg}]`,
    yup: (arg, mutation) =>
      `array().of(${
        arg in TYPE_MAP
          ? TYPE_MAP[arg as keyof typeof TYPE_MAP].yup
          : camelize(arg, true) + "CreationInputSchema"
      }${mutation === "create" ? ".required()" : ""})`,
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

export function getYup(field: Field, mutation: Mutation = "create"): string {
  // <%- (field.required ? ".required()" : (typeof field.default !== "undefined") ? "" : field.type === "Boolean" ? ".notRequired()" : ".nullable()" %><%- typeof field.default !== "undefined" ? `.default(() => { return ${typeof field.default === "string" ? field.default : JSON5.stringify(field.default)}; })` : ""%>,
  let ret = "";
  if (field.type === "Map" && field.shape) {
    ret = `${field.name}Schema`;
  } else {
    let fieldYupType = TYPE_MAP[field.type].yup;
    if (typeof fieldYupType === "function") {
      if (field.typeArg) {
        fieldYupType = fieldYupType(field.typeArg, mutation);
      }
    }
    ret = `${fieldYupType}`;
  }
  if (field.required) {
    if (mutation === "update") {
      ret += ".notRequired()";
    } else if (field.type !== "Map") {
      ret += ".required()";
    }
  } else {
    if (!(field.type === "Boolean" && typeof field.default !== "undefined")) {
      ret += ".nullable()";
    }
    ret += ".notRequired()";
  }
  if (typeof field.default !== "undefined" && mutation === "create") {
    ret += `.default(() => { return ${
      typeof field.default === "string" ? field.default : JSON5.stringify(field.default)
    }; })`;
  }
  return ret;
}

export type Field = {
  name?: string;
  label?: string;
  required: boolean;
  unique?: boolean;
} & (
  | {
      type: "Array";
      typeArg: FieldType | keyof typeof Types;
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
    typeArg?: FieldType | keyof typeof Types;
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

export default interface Definition<T extends string = string> {
  name: string;
  modelImports?: string[];
  fields: Record<T, Field>;
  hooks?: {
    save: {
      pre?: PreFnWithDocumentType<Partial<Model> & { [key in T]?: unknown }>;
      post?: (instance: DocumentType<Partial<Model> & { [key in T]?: unknown }>) => void;
    };
  };
}

export const REQUIRED_STRING: Field = { required: true, type: "String" };
export const OPTIONAL_STRING: Field = { required: false, type: "String" };
export const OPTIONAL_BOOLEAN: Field = { required: false, type: "Boolean" };
