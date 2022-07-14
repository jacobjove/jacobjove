import * as TypeGraphQL from "type-graphql";
import { CategorizationCreateInput } from "../../../inputs/CategorizationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationCreateInput, {
    nullable: false,
  })
  data!: CategorizationCreateInput;
}
