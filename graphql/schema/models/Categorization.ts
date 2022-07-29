import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../models/Act";
import { Category } from "../models/Category";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Categorization", {
  isAbstract: true,
})
export class Categorization extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  categoryId!: string;

  category?: Category;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  act?: Act;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
