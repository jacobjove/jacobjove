import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserArgs {
  @TypeGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: UserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
