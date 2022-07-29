import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueScalarFieldEnum } from "../../../../enums/ValueScalarFieldEnum";
import { ValueOrderByWithRelationInput } from "../../../inputs/ValueOrderByWithRelationInput";
import { ValueWhereInput } from "../../../inputs/ValueWhereInput";
import { ValueWhereUniqueInput } from "../../../inputs/ValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyValueArgs {
  @TypeGraphQL.Field(() => ValueWhereInput, { nullable: true })
  where?: ValueWhereInput | undefined;

  @TypeGraphQL.Field(() => [ValueOrderByWithRelationInput], { nullable: true })
  orderBy?: ValueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ValueWhereUniqueInput, { nullable: true })
  cursor?: ValueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [ValueScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<"id" | "name" | "slug" | "description" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
