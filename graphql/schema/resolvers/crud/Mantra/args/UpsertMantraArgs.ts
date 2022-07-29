import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateInput } from "../../../inputs/MantraCreateInput";
import { MantraUpdateInput } from "../../../inputs/MantraUpdateInput";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMantraArgs {
  @TypeGraphQL.Field(() => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field(() => MantraCreateInput, { nullable: false })
  create!: MantraCreateInput;

  @TypeGraphQL.Field(() => MantraUpdateInput, { nullable: false })
  update!: MantraUpdateInput;
}
