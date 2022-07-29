import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueScalarFieldEnum } from "../../../../enums/ValueScalarFieldEnum";
import { ValueOrderByWithRelationInput } from "../../../inputs/ValueOrderByWithRelationInput";
import { ValueWhereInput } from "../../../inputs/ValueWhereInput";
import { ValueWhereUniqueInput } from "../../../inputs/ValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UserValuesArgs {
  @TypeGraphQL.Field((_type) => ValueWhereInput, { nullable: true })
  where?: ValueWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ValueOrderByWithRelationInput], { nullable: true })
  orderBy?: ValueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ValueWhereUniqueInput, { nullable: true })
  cursor?: ValueWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ValueScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<"id" | "userId" | "valueId" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
