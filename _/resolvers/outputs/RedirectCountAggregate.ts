import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RedirectCountAggregate", { isAbstract: true })
export class RedirectCountAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  _id!: ObjectId;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  old_path!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  new_path!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
