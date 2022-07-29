import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelation } from "../models/IdentityActRelation";
import { User } from "../models/User";
import { IdentityCount } from "../resolvers/outputs/IdentityCount";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Identity", {
  isAbstract: true,
})
export class Identity extends Model {
  user?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null;

  identities?: Identity[];

  actionRelations?: IdentityActRelation[];

  @TypeGraphQL.Field(() => IdentityCount, { nullable: true })
  _count?: IdentityCount | null;
}
