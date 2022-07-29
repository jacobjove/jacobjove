import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingOrderByWithRelationInput } from "../../../inputs/ShelvingOrderByWithRelationInput";
import { ShelvingWhereInput } from "../../../inputs/ShelvingWhereInput";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShelvingArgs {
  @TypeGraphQL.Field(() => ShelvingWhereInput, { nullable: true })
  where?: ShelvingWhereInput | undefined;

  @TypeGraphQL.Field(() => [ShelvingOrderByWithRelationInput], { nullable: true })
  orderBy?: ShelvingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: true })
  cursor?: ShelvingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
