import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../models/Notebook";
import { User } from "../models/User";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("NotebookUserPermission", {
  isAbstract: true,
})
export class NotebookUserPermission extends Model {
  user?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  notebook?: Notebook;

  @TypeGraphQL.Field(() => String, { nullable: false })
  notebookId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
