import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListOrderByWithRelationInput } from "../../../inputs/ListOrderByWithRelationInput";
import { ListWhereInput } from "../../../inputs/ListWhereInput";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateListArgs {
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
}
