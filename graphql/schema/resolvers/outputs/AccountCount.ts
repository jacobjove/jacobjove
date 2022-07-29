import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AccountCount", {
  isAbstract: true,
})
export class AccountCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  calendars!: number;
}
