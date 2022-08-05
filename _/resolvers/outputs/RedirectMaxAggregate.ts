import * as TypeGraphQL from "type-graphql-v2-fork";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@/graphql/schema/scalars";

@TypeGraphQL.ObjectType("RedirectMaxAggregate", { isAbstract: true })
export class RedirectMaxAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  old_path!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  new_path!: string | null;
}
