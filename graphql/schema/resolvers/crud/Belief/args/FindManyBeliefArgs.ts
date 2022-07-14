import * as TypeGraphQL from "type-graphql";
import { BeliefScalarFieldEnum } from "../../../../enums/BeliefScalarFieldEnum";
import { BeliefOrderByWithRelationInput } from "../../../inputs/BeliefOrderByWithRelationInput";
import { BeliefWhereInput } from "../../../inputs/BeliefWhereInput";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefWhereInput, {
    nullable: true,
  })
  where?: BeliefWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [BeliefOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: BeliefOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => BeliefWhereUniqueInput, {
    nullable: true,
  })
  cursor?: BeliefWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [BeliefScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "name" | "slug" | "description" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
