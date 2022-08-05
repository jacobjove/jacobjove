import { IModelOptions } from "@typegoose/typegoose/lib/types";
import { Severity } from "@typegoose/typegoose";

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
