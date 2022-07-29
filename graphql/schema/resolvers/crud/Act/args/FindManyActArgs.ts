import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActScalarFieldEnum } from "../../../../enums/ActScalarFieldEnum";
import { ActOrderByWithRelationInput } from "../../../inputs/ActOrderByWithRelationInput";
import { ActWhereInput } from "../../../inputs/ActWhereInput";
import { ActWhereUniqueInput } from "../../../inputs/ActWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyActArgs {
  @TypeGraphQL.Field((_type) => ActWhereInput, { nullable: true })
  where?: ActWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActOrderByWithRelationInput], { nullable: true })
  orderBy?: ActOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: true })
  cursor?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ActScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "name"
        | "slug"
        | "description"
        | "isPublic"
        | "parentId"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
