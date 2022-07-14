import * as TypeGraphQL from "type-graphql";
import { ActCreateInput } from "../../../inputs/ActCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActArgs {
  @TypeGraphQL.Field((_type) => ActCreateInput, {
    nullable: false,
  })
  data!: ActCreateInput;
}
