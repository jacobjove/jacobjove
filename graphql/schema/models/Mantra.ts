import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCount } from "../resolvers/outputs/MantraCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Mantra", {
  isAbstract: true,
})
export class Mantra extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  content!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => MantraCount, { nullable: true })
  _count?: MantraCount | null;
}
