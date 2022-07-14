import * as TypeGraphQL from "type-graphql";
import { IdentityActRelation } from "../models/IdentityActRelation";
import { User } from "../models/User";
import { IdentityCount } from "../resolvers/outputs/IdentityCount";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Identity", {
  isAbstract: true,
})
export class Identity extends Model {
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

  identities?: Identity[];

  actionRelations?: IdentityActRelation[];

  @TypeGraphQL.Field((_type) => IdentityCount, {
    nullable: true,
  })
  _count?: IdentityCount | null;
}
