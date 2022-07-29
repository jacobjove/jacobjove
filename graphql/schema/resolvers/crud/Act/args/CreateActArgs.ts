import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateInput } from "../../../inputs/ActCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActArgs {
  @TypeGraphQL.Field(() => ActCreateInput, { nullable: false })
  data!: ActCreateInput;
}
