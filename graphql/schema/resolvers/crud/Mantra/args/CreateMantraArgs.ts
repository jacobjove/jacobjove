import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateInput } from "../../../inputs/MantraCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMantraArgs {
  @TypeGraphQL.Field(() => MantraCreateInput, { nullable: false })
  data!: MantraCreateInput;
}
