import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../models/Notebook";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Note", {
  isAbstract: true,
})
export class Note extends Model {
  notebook?: Notebook;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  notebookId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  title?: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  body?: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
