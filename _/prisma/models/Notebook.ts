import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Note } from "./Note";
import { NotebookUserPermission } from "./NotebookUserPermission";
import { User } from "./User";

@TypeGraphQL.ObjectType("Notebook", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Notebook extends Model {
  owner?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  title!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true })
  public!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  description?: string | null;

  notes?: Note[];

  userPermissions?: NotebookUserPermission[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const NotebookModel = getModelForClass<typeof Notebook>(Notebook);
export default NotebookModel;
