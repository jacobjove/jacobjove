import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraUpdateInput } from "../../../inputs/MantraUpdateInput";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMantraArgs {
  @TypeGraphQL.Field((_type) => MantraUpdateInput, { nullable: false })
  data!: MantraUpdateInput;

  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;
}
