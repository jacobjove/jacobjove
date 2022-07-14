import * as TypeGraphQL from "type-graphql";
import { Act } from "../models/Act";
import { Category } from "../models/Category";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Categorization", {
  isAbstract: true,
})
export class Categorization extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  categoryId!: string;

  category?: Category;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actId!: string;

  act?: Act;

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
}
