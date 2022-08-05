import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActScalarFieldEnum } from "../../../../enums/ActScalarFieldEnum";
import { ActOrderByWithRelationInput } from "../../../inputs/ActOrderByWithRelationInput";
import { ActWhereInput } from "../../../inputs/ActWhereInput";
import { ActWhereUniqueInput } from "../../../inputs/ActWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class ActVariantsArgs {
  @TypeGraphQL.Field(() => ActWhereInput, { nullable: true })
  where?: ActWhereInput | undefined;

  @TypeGraphQL.Field(() => [ActOrderByWithRelationInput], { nullable: true })
  orderBy?: ActOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  cursor?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [ActScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "name"
        | "slug"
        | "description"
        | "public"
        | "parentId"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
