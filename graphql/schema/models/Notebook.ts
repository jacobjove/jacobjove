import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  owner?: User;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  ownerId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  isPublic!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | null;

  notes?: Note[];

  userPermissions?: NotebookUserPermission[];

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => NotebookCount, {
    nullable: true,
  })
  _count?: NotebookCount | null;
}
