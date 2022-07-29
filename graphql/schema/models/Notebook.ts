import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "../models/Note";
import { NotebookUserPermission } from "../models/NotebookUserPermission";
import { User } from "../models/User";
import { NotebookCount } from "../resolvers/outputs/NotebookCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Notebook", {
  isAbstract: true,
})
export class Notebook extends Model {
  owner?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null;

  notes?: Note[];

  userPermissions?: NotebookUserPermission[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => NotebookCount, { nullable: true })
  _count?: NotebookCount | null;
}
