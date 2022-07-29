import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityOrderByWithRelationInput } from "../../../inputs/IdentityOrderByWithRelationInput";
import { IdentityWhereInput } from "../../../inputs/IdentityWhereInput";
import { IdentityWhereUniqueInput } from "../../../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIdentityArgs {
  @TypeGraphQL.Field(() => IdentityWhereInput, { nullable: true })
  where?: IdentityWhereInput | undefined;

  @TypeGraphQL.Field(() => [IdentityOrderByWithRelationInput], { nullable: true })
  orderBy?: IdentityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: true })
  cursor?: IdentityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
