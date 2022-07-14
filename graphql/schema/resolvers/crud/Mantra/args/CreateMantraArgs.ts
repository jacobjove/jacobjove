import * as TypeGraphQL from "type-graphql";
import { MantraCreateInput } from "../../../inputs/MantraCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMantraArgs {
  @TypeGraphQL.Field((_type) => MantraCreateInput, {
    nullable: false,
  })
  data!: MantraCreateInput;
}
