import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListScalarFieldEnum } from "../../../../enums/ListScalarFieldEnum";
import { ListOrderByWithRelationInput } from "../../../inputs/ListOrderByWithRelationInput";
import { ListWhereInput } from "../../../inputs/ListWhereInput";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstListArgs {
  @TypeGraphQL.Field((_type) => ListWhereInput, { nullable: true })
  where?: ListWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ListOrderByWithRelationInput], { nullable: true })
  orderBy?: ListOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, { nullable: true })
  cursor?: ListWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ListScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "ownerId"
        | "name"
        | "slug"
        | "description"
        | "fields"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
