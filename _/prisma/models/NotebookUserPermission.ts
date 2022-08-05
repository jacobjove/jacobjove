import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { Notebook } from "./Notebook";
import { User } from "./User";

@TypeGraphQL.ObjectType("NotebookUserPermission", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class NotebookUserPermission extends Model {
  user?: User;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  notebook?: Notebook;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  notebookId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const NotebookUserPermissionModel =
  getModelForClass<typeof NotebookUserPermission>(NotebookUserPermission);
export default NotebookUserPermissionModel;
