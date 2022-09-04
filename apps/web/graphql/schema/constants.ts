import { Severity } from "@typegoose/typegoose";
import { IModelOptions } from "@typegoose/typegoose/lib/types";

export const DEFAULT_MODEL_OPTIONS: IModelOptions = {
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    minimize: false, // https://mongoosejs.com/docs/guide.html#minimize
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
};

export const MAX_TASK_RANK = 2 ** 31 - 1;
export const MIN_TASK_RANK = -MAX_TASK_RANK - 1;
