import * as TypeGraphQL from "type-graphql-v2-fork";
import { User } from "../models/User";
import { ValueCount } from "../resolvers/outputs/ValueCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Value", {
  isAbstract: true,
})
export class Value extends Model {
  user?: User;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  values?: Value[];

  @TypeGraphQL.Field((_type) => ValueCount, { nullable: true })
  _count?: ValueCount | null;
}
