import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListScalarFieldEnum } from "../../../../enums/ListScalarFieldEnum";
import { ListOrderByWithRelationInput } from "../../../inputs/ListOrderByWithRelationInput";
import { ListWhereInput } from "../../../inputs/ListWhereInput";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UserListsArgs {
  @TypeGraphQL.Field(() => ListWhereInput, { nullable: true })
  where?: ListWhereInput | undefined;

  @TypeGraphQL.Field(() => [ListOrderByWithRelationInput], { nullable: true })
  orderBy?: ListOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: true })
  cursor?: ListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [ListScalarFieldEnum], { nullable: true })
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
