import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingOrderByWithRelationInput } from "../../../inputs/ShelvingOrderByWithRelationInput";
import { ShelvingWhereInput } from "../../../inputs/ShelvingWhereInput";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShelvingArgs {
  @TypeGraphQL.Field((_type) => ShelvingWhereInput, { nullable: true })
  where?: ShelvingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingOrderByWithRelationInput], { nullable: true })
  orderBy?: ShelvingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, { nullable: true })
  cursor?: ShelvingWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
