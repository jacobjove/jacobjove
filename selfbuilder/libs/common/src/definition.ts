import * as Models from "@common/_definitions";
import { camelize } from "inflection";
import JSON5 from "json5";

export type Model = keyof typeof Models;
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

interface Options {
  arg?: string;
  ctx?: "gql" | "mongo" | "interface" | "schema";
  mutation?: Mutation;
}

export const TYPE_MAP: Record<
  FieldType,
  {
    type: string | ((options?: Options) => string);
    caster: string | ((options?: Options) => string);
    yup: string | ((arg: string, mutation: Mutation) => string);
  }
> = {
  Array: {
    type: ({ arg } = {}) =>
      `${
        arg ? (arg in TYPE_MAP ? TYPE_MAP[arg as keyof typeof TYPE_MAP].type : arg) : "unknown"
      }[]`,
    caster: ({ arg } = {}) =>
      `[${
        arg ? (arg in TYPE_MAP ? TYPE_MAP[arg as keyof typeof TYPE_MAP].caster : arg) : "Object"
      }]`,
    yup: (arg, mutation) =>
      `array().of(${
        arg in TYPE_MAP
          ? TYPE_MAP[arg as keyof typeof TYPE_MAP].yup + ".defined()"
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
    caster: ({ ctx } = {}) => (ctx === "gql" ? "DateTimeScalar" : "Date"),
    yup: "date()",
  },
  ID: {
    type: ({ ctx } = {}) =>
      ctx === "interface"
        ? "mongoose.Types.ObjectId"
        : ctx === "schema"
        ? "mongoose.Schema.Types.ObjectId"
        : "string",
    caster: ({ ctx } = {}) =>
      ctx === "gql"
        ? "ObjectIdScalar"
        : ctx === "schema"
        ? `mongoose.Schema.Types.ObjectId`
        : "ObjectId",
    yup: "string()",
  },
  Int: {
    type: "number",
    caster: ({ ctx } = {}) => (ctx === "gql" ? "Int" : "Number"),
    yup: "number()",
  },
  Map: {
    type: "Record<string, unknown>",
    caster: ({ ctx } = {}) => (ctx === "gql" ? "JSONResolver" : "Object"),
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

export function getType(field: Field, options?: Options): string {
  const fieldType = TYPE_MAP[field.type].type;
  if (typeof fieldType === "function") return fieldType({ arg: field.typeArg, ...options });
  // if (field.type === "Map" && field.shape) return h.changeCase.pascal(field.name)
  return `${fieldType}`;
}

export function getConstructor(field: Field, options?: Options): string {
  const fieldTypeCaster = TYPE_MAP[field.type].caster;
  if (typeof fieldTypeCaster === "function")
    return fieldTypeCaster({ arg: field.typeArg, ...options });
  if (typeof fieldTypeCaster == "string") return fieldTypeCaster;
  return `${fieldTypeCaster}`;
}

export function getYup(field: Field, mutation: Mutation = "create"): string {
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
      if (!field.nullable) ret += ".nonNullable()";
      ret += ".optional()";
    } else if (field.type !== "Map") {
      ret += ".required()";
    }
  } else {
    if (field.type === "Boolean" && field.nullable !== true) {
      ret += ".nonNullable()";
    } else if (field.nullable !== false) {
      ret += ".nullable()";
    }
    ret += ".optional()";
  }
  if (typeof field.default !== "undefined" && mutation === "create") {
    ret += `.default(() => { return ${
      typeof field.default === "string" ? `"${field.default}"` : JSON5.stringify(field.default)
    }; })`;
  }
  return ret;
}

export type Field = {
  name?: string;
  label?: string;
  required: boolean;
  nullable?: boolean;
  unique?: boolean;
} & (
  | {
      type: "ID";
      ref: Model;
    }
  | {
      type: "Array";
      typeArg: FieldType | Model;
      ref?: Model;
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
      type: Exclude<FieldType, "Array" | "Map" | "String" | "ID">;
    }
) & {
    typeArg?: FieldType | Model;
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
}

export const REQUIRED_STRING: Field = { required: true, type: "String" };
export const OPTIONAL_STRING: Field = { required: false, type: "String" };
export const OPTIONAL_BOOLEAN: Field = { required: false, type: "Boolean" };
