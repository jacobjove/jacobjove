import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Notebook } from "./Notebook";

@TypeGraphQL.ObjectType("Note", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Note extends Model {
  notebook?: Notebook;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  notebookId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  title?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  body?: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true })
  public!: boolean;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const NoteModel = getModelForClass<typeof Note>(Note);
export default NoteModel;
