import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType({ isAbstract: true })
export class Model {
  __typename?: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;
}
