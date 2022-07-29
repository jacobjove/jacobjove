import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefOrderByWithRelationInput } from "../../../inputs/BeliefOrderByWithRelationInput";
import { BeliefWhereInput } from "../../../inputs/BeliefWhereInput";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBeliefArgs {
  @TypeGraphQL.Field(() => BeliefWhereInput, { nullable: true })
  where?: BeliefWhereInput | undefined;

  @TypeGraphQL.Field(() => [BeliefOrderByWithRelationInput], { nullable: true })
  orderBy?: BeliefOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => BeliefWhereUniqueInput, { nullable: true })
  cursor?: BeliefWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
