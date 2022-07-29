import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateInput } from "../../../inputs/ShelvingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShelvingArgs {
  @TypeGraphQL.Field((_type) => ShelvingCreateInput, { nullable: false })
  data!: ShelvingCreateInput;
}
