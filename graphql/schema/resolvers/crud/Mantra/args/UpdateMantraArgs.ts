import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraUpdateInput } from "../../../inputs/MantraUpdateInput";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMantraArgs {
  @TypeGraphQL.Field(() => MantraUpdateInput, { nullable: false })
  data!: MantraUpdateInput;

  @TypeGraphQL.Field(() => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;
}
