import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraOrderByWithRelationInput } from "../../../inputs/MantraOrderByWithRelationInput";
import { MantraWhereInput } from "../../../inputs/MantraWhereInput";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMantraArgs {
  @TypeGraphQL.Field(() => MantraWhereInput, { nullable: true })
  where?: MantraWhereInput | undefined;

  @TypeGraphQL.Field(() => [MantraOrderByWithRelationInput], { nullable: true })
  orderBy?: MantraOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => MantraWhereUniqueInput, { nullable: true })
  cursor?: MantraWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
