import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationOrderByWithRelationInput } from "../../../inputs/CategorizationOrderByWithRelationInput";
import { CategorizationWhereInput } from "../../../inputs/CategorizationWhereInput";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCategorizationArgs {
  @TypeGraphQL.Field(() => CategorizationWhereInput, { nullable: true })
  where?: CategorizationWhereInput | undefined;

  @TypeGraphQL.Field(() => [CategorizationOrderByWithRelationInput], { nullable: true })
  orderBy?: CategorizationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: true })
  cursor?: CategorizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
