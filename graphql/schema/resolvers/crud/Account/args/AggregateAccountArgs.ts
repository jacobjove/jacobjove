import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountOrderByWithRelationInput } from "../../../inputs/AccountOrderByWithRelationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAccountArgs {
  @TypeGraphQL.Field(() => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput | undefined;

  @TypeGraphQL.Field(() => [AccountOrderByWithRelationInput], { nullable: true })
  orderBy?: AccountOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: true })
  cursor?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
