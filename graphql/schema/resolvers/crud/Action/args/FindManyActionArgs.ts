import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScalarFieldEnum } from "../../../../enums/ActionScalarFieldEnum";
import { ActionOrderByWithRelationInput } from "../../../inputs/ActionOrderByWithRelationInput";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyActionArgs {
  @TypeGraphQL.Field(() => ActionWhereInput, { nullable: true })
  where?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(() => [ActionOrderByWithRelationInput], { nullable: true })
  orderBy?: ActionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ActionWhereUniqueInput, { nullable: true })
  cursor?: ActionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [ActionScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<"id" | "habitId" | "start" | "end" | "notes" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
