import * as TypeGraphQL from "type-graphql";
import { User } from "../models/User";
import { BeliefCount } from "../resolvers/outputs/BeliefCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Belief", {
  isAbstract: true,
})
export class Belief extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  user?: User;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | null;

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

  @TypeGraphQL.Field((_type) => BeliefCount, {
    nullable: true,
  })
  _count?: BeliefCount | null;
}
