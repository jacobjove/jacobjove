import * as TypeGraphQL from "type-graphql";
import { MantraScalarFieldEnum } from "../../../../enums/MantraScalarFieldEnum";
import { MantraOrderByWithRelationInput } from "../../../inputs/MantraOrderByWithRelationInput";
import { MantraWhereInput } from "../../../inputs/MantraWhereInput";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UserMantrasArgs {
  @TypeGraphQL.Field((_type) => MantraWhereInput, {
    nullable: true,
  })
  where?: MantraWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MantraOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MantraOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MantraWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MantraScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "userId" | "mantraId" | "content" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
